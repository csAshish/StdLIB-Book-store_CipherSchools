import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { useAuthFunctions } from "../../Context/useAuthFunctions";
import { Loading } from "../../components/Component";

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const { authState, authDispatch } = useAuth();
	const [loading, setLoading] = useState(false);
	const { login } = useAuthFunctions();

	const loginHandler = (e) => {
		e.preventDefault();
		login(setLoading);
	};
	return (
		<div className="login-form-container">
			<form className="login_form-StdLib" onSubmit={loginHandler}>
				<h3 className="heading-login">Login</h3>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						className="input-field"
						type="email"
						id="email"
						name="email"
						placeholder="shilpe26@gmail.com"
						required
						value={authState.email}
						onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
						onChange={(e) =>
							authDispatch({ type: "EMAIL", payload: e.target.value })
						}
					/>
				</div>
				<div className="input-group">
					<label className="password-label" htmlFor="password">
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
					<button className="btn btn-primary">Log In</button>
				</div>
				<div className="input-group text-input">
					<button
						className="btn btn-info"
						onClick={() => authDispatch({ type: "TEST-CREDENTIALS" })}
					>
						Test Login
					</button>
				</div>
				<div className="input-group">
					<p className="no-account text-md">
						Don't have an account ?{" "}
						<Link to="/signup" className="link text-md">
							SignUp
						</Link>
					</p>
				</div>
			</form>
			{loading && <Loading />}
		</div>
	);
}

export { Login };
