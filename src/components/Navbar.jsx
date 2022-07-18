import React, { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/icon-logo.png";
import { useCart } from "../pages/cart/cart-context";
import { useWishlist } from "../pages/wishlist/wishlist-context";
import { useAuthFunctions } from "../Context/useAuthFunctions";

function Navbar({ setSearch }) {
	const { wishlist_state } = useWishlist();
	const { cart_state } = useCart();
	const token = localStorage.getItem("ecommToken");
	const { logout } = useAuthFunctions();
	const navigate = useNavigate();
	const location = useLocation();

	const debounce = (func) => {
		let timer;
		return function (...args) {
			const context = this;
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				timer = null;
				func.apply(context, args);
			}, 500);
		};
	};

	const handleChange = (value) => {
		setSearch(value);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const optimizedFn = useCallback(debounce(handleChange), []);

	const searchHandler = (e) => {
		e.preventDefault();
		if (location.pathname !== "/Product") {
			navigate("/Product");
		}
	};

	return (
		<div>
			<header className="header">
				<div className="header-StdLib">
					<Link to="/" className="logo">
						<img src={Logo} alt="icon-logo" />
						StdLib
					</Link>
					<form onSubmit={searchHandler} className="search-form">
						<input
							type="search"
							placeholder="Find your next favorite book"
							className="input-StdLib"
							id="search-box"
							onChange={(e) => optimizedFn(e.target.value)}
						/>
						<label
							htmlFor="search-box"
							className="fas fa-search search-icon"
						></label>
					</form>
					<div className="icons">
						<div id="search-btn" className="fas fa-search header-icons"></div>
						<Link to="/wishlist" className="fas fa-heart header-icons">
							<div className="badge-icon">{wishlist_state.quantity}</div>
						</Link>
						<Link to="/cart" className="fas fa-shopping-cart header-icons">
							<div className="badge-icon">{cart_state.quantity}</div>
						</Link>
						{!token ? (
							<Link to="/login" id="login-btn" className="login-btn-StdLib">
								<button className="btn login-btn">Login</button>
							</Link>
						) : (
							<button onClick={logout} className="btn login-btn">
								Logout
							</button>
						)}
						<Link to="/signup" id="signUp-btn">
							<button className="btn signUp-btn-StdLib">Signup</button>
						</Link>
					</div>
				</div>
			</header>
		</div>
	);
}

export { Navbar };
