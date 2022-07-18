import React, { useState, useEffect } from "react";
import { useCart } from "../cart/cart-context";
import { Link } from "react-router-dom";

function CartPrice() {
	const { cart_state } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (cart_state.items.length !== 0) {
			setTotalPrice(
				cart_state.items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
			);
		} else {
			setTotalPrice(0);
		}
	}, [cart_state]);

	return (
		<div className="center3 bill-cart">
			<div className="container3-3">
				<div className="card">
					<h1 className="head2-2">PRICE DETAILS</h1>
					<span className="hr_line-book"></span>
					<div className="cart-space">
						<h2 className="head3-2">Price</h2>
						<h2 className="head3-2">$ {totalPrice.toFixed(2)}</h2>
					</div>

					<div className="cart-space">
						<h2 className="head3-2">Delivery Charges</h2>
						<h2 className="head3-2">FREE</h2>
					</div>
					<span className="hr_line-book"></span>
					<div className="cart-space">
						<h2 className="head3-2">TOTAL AMOUNT</h2>
						<h2 className="head3-2">$ {totalPrice.toFixed(2)}</h2>
					</div>
					<span className="hr_line-book"></span>
				</div>

				<div className="footer">
					<div className="buttons place-order-btn">
						<Link to="/checkout">
							<button type="button">PLACE ORDER</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export { CartPrice };
