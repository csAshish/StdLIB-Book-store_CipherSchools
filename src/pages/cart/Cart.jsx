import React from "react";
import { useCart } from "./cart-context";
import { Link } from "react-router-dom";
import { CartPrice } from "./CartPrice";
import { CartProducts } from "./CartProducts";
function Cart() {
	const { cart_state } = useCart();

	return (
		<div>
			<h2 className="first">Cart({cart_state.quantity})</h2>
			<div>
				{cart_state.quantity === 0 ? (
					<section className="cards_for-book">
						<div className="card-vertical flex-items bg-cart">
							<div className="image-container badge-container">
								<img
									src={require("../../assets/AddtoCart.png")}
									className="img-responsive card-img cart-img"
									alt="wishlist-img"
								/>
							</div>
							<div className="text-container">
								<h3 className="price-tag">Hey, it feels so light!</h3>
								<h4 className="heading-primary">
									There is nothing in your bag.
								</h4>
								<h4 className="heading-primary">Let's add some items.</h4>
								<div className="buttons empty-cart-btn">
									<Link to="/product">
										<button className="empty-cart-btn">START SHOPPING</button>
									</Link>
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className="cart-container">
						<CartPrice />
						<CartProducts />
					</div>
				)}
			</div>
		</div>
	);
}

export { Cart };
