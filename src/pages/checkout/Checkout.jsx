import { useState } from "react";
import "./checkout.css";
import { AddressList, AddressModal } from "../Pages";
import { OrderDetails } from "./OrderDetails";

function Checkout() {
	const [showForm, setShowForm] = useState(false);
	const [isEditing, setIsEditing] = useState({ value: false, data: {} });

	return (
		<div>
			<section className="main-section checkout-container mt-32">
				<div className="heading-3 text font-semibold">Checkout</div>
				<div className="checkout-wrapper">
					<div className="checkout-address">
						<AddressList
							setShowForm={setShowForm}
							setIsEditing={setIsEditing}
						/>
						{showForm && (
							<AddressModal
								setShowForm={setShowForm}
								isEditing={isEditing}
								setIsEditing={setIsEditing}
							/>
						)}
					</div>

					<OrderDetails />
				</div>
			</section>
		</div>
	);
}

export { Checkout };
