import { React, useEffect, useState } from "react";
import { useAddTask } from "../../services/addressServices/useAddTask";
import { useEditTask } from "../../services/addressServices/useEditTask";
import "./addressModal.css";
import { useTask } from "../../Context/address-context";
const dummyAddress = {
	name: "Shilpe Saxena",
	street: "35, Preetam Nagar",
	city: "Prayagraj",
	state: "UP",
	zipcode: "211001",
	country: "India",
	mobile: "9140918899",
};

function AddressModal({ setShowForm, isEditing, setIsEditing }) {
	const { addressDispatch } = useTask();
	const [error, setError] = useState({
		value: false,
		msg: "",
	});
	const [formData, setFormData] = useState({
		name: "",
		street: "",
		city: "",
		zipcode: "",
		state: "",
		country: "",
		mobile: "",
	});
	const { addTask } = useAddTask();
	const { editTask } = useEditTask();

	useEffect(() => {
		setFormData((val) => ({
			...val,
			name: isEditing.data.name,
			street: isEditing.data.street,
			city: isEditing.data.city,
			zipcode: isEditing.data.zipcode,
			state: isEditing.data.state,
			country: isEditing.data.country,
			mobile: isEditing.data.mobile,
		}));
	}, [isEditing]);

	function addTaskHandler(e) {
		e.preventDefault();
		if (formData.name.trim().length < 3) {
			setError((err) => ({
				...err,
				value: true,
				msg: "name must be atleast 3 characters long !",
			}));
		} else if (formData.street.trim().length < 10) {
			setError((err) => ({
				...err,
				value: true,
				msg: "street must be atleast 12 characters long !",
			}));
		} else if (formData.city.trim().length < 1) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Please Enter city !",
			}));
		} else if (
			formData.zipcode.trim().length > 0 &&
			!/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test
		) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Invalid Mobile Number !",
			}));
		} else if (
			formData.mobile.trim().length > 0 &&
			!/^[1-9]{1}[0-9]{9}$/.test
		) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Invalid Zipcode !",
			}));
		} else {
			if (isEditing.value) {
				editTask({ ...formData, id: isEditing.data.id }, setIsEditing);
			} else {
				addTask({ ...formData });
			}
			setFormData((val) => ({
				...val,
				name: "",
				street: "",
				city: "",
				zipcode: "",
				state: "",
				country: "",
				mobile: "",
			}));
			setShowForm((val) => !val);
		}
	}

	return (
		<div className="modal-form-container">
			<div className="form-modal p-8 rounded">
				<form onSubmit={addTaskHandler} className="flex flex-col">
					<input
						className="add-input"
						type="text"
						required
						placeholder="Add name"
						value={formData.name}
						onChange={(e) =>
							setFormData((val) => ({ ...val, name: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						type="text"
						required
						className="add-input"
						placeholder="Add street"
						value={formData.street}
						onChange={(e) =>
							setFormData((val) => ({ ...val, street: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						required
						placeholder="Time in city"
						value={formData.city}
						onChange={(e) =>
							setFormData((val) => ({ ...val, city: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						required
						maxLength="6"
						placeholder="Add zipcode"
						value={formData.zipcode}
						onChange={(e) =>
							setFormData((val) => ({ ...val, zipcode: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						required
						placeholder="Add state"
						value={formData.state}
						onChange={(e) =>
							setFormData((val) => ({ ...val, state: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						required
						placeholder="Add country"
						value={formData.country}
						onChange={(e) =>
							setFormData((val) => ({ ...val, country: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						maxLength="10"
						required
						placeholder="Add mobile"
						value={formData.mobile}
						onChange={(e) =>
							setFormData((val) => ({ ...val, mobile: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					{error.value && <p className="text-base">{error.msg}</p>}
					<button className="add-btn self-end cursor">
						{isEditing.value ? "Update" : "Add"}
					</button>
					<div>
						<button
							className="btn dummy-btn"
							type="button"
							onClick={() =>
								addressDispatch({
									type: "SET_DUMMY_ADDR",
									payload: dummyAddress,
								})
							}
						>
							Fill with Dummy values
						</button>
					</div>
				</form>
				<button onClick={() => setShowForm((val) => !val)}>
					<i className="text-3xl cursor fas fa-times-circle"></i>
				</button>
			</div>
		</div>
	);
}

export { AddressModal };
