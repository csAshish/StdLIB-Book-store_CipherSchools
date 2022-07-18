import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { useAuthFunctions } from "../../Context/useAuthFunctions";
import { Loading } from "../../components/Component";

function Signup() {
	const confirm_password = useRef();
	const [showPassword, setShowPassword] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [loading, setLoading] = useState(false);
	const { authState, authDispatch } = useAuth();
	const { signup } = useAuthFunctions();
	const signupHandler = (e) => {
		e.preventDefault();
		if (confirm_password.current.value !== authState.password) {
			setErrorMsg(true);
		} else {
			signup(setLoading);
		}
	};
	return (
		<div className="login-form-container signup">
			<form className="login_form-StdLib" onSubmit={signupHandler}>
				<h3 className="heading-login">Signup</h3>
				<div className="input-group">
					<label htmlFor="name">Name</label>
					<input
						className="input-field"
						type="text"
						id="name"
						name="name"
						placeholder="shilpe"
						required
						minLength="3"
						value={authState.name}
						onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
						onChange={(e) =>
							authDispatch({ type: "NAME", payload: e.target.value })
						}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						className="input-field"
						type="email"
						id="email"
						name="email"
						placeholder="shilpe@gmail.com"
						required
						value={authState.email}
						onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
						onChange={(e) =>
							authDispatch({ type: "EMAIL", payload: e.target.value })
						}
					/>
				</div>
				<div className="input-group">
					<label className="password-label label-class" htmlFor="password">
						Password
						<button
							className="eye-btn"
							onClick={(e) => {
								e.preventDefault();
								setShowPassword((val) => !val);
							}}
						>
							{showPassword ? (
								<i className="fas fa-eye"></i>
							) : (
								<i className="fas fa-eye-slash"></i>
							)}
						</button>
					</label>

					<input
						className="input-field"
						type={showPassword ? "text" : "password"}
						id="password"
						name="password"
						placeholder="********"
						required
						minLength="8"
						value={authState.password}
						onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
						onChange={(e) =>
							authDispatch({ type: "PASSWORD", payload: e.target.value })
						}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="cpassword">Confirm Password</label>
					<input
						className="input-field"
						type="password"
						id="cpassword"
						name="cpassword"
						placeholder="********"
						ref={confirm_password}
						onFocus={() => setErrorMsg(false)}
					/>
					{errorMsg && (
						<p className="error-text text-md">
							Confirm Password doesn't match with the Password.
						</p>
					)}
				</div>
				<div className="input-group">
					<button className="btn login-btn">SignUp</button>
					<p className="no-account text-md">
						Already have an account ?{" "}
						<Link to="/login" className="link text-md">
							Login
						</Link>
					</p>
				</div>
			</form>

			{loading && <Loading />}
		</div>
	);
}

export { Signup };
