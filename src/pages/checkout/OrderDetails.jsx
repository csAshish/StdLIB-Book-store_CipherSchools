import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useCart } from "../cart/cart-context";
import "./checkout.css";

function OrderDetails() {
	const [totalPrice, setTotalPrice] = useState(0);
	const alert = useAlert();
	const { cart_state } = useCart();

	useEffect(() => {
		if (cart_state.items.length !== 0) {
			setTotalPrice(
				cart_state.items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
			);
		} else {
			setTotalPrice(0);
		}
	}, [cart_state]);

	const loadScript = async (url) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = url;

			script.onload = () => {
				resolve(true);
			};

			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const displayRazorpay = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert.show("Razorpay SDK failed to load, check your connection", {
				type: "error",
			});
			return;
		}

		const options = {
			key: "rzp_test_SP206ka3zuV4SX",
			amount: totalPrice * 100,
			currency: "INR",
			name: "StdLib",
			description: "Thank you for shopping with us",
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<div className="order-details">
			<div className="title">Order Summary</div>

			<div className="order-items-wrapper order-items"></div>

			<div className="title">Price Details</div>

			<div className="order-items-wrapper">
				<div className="item">
					<div>Total Price</div>
					<div>$ {totalPrice.toFixed(2)}</div>
				</div>

				<div className="item">
					<div>Total Discount</div>
					<div>$0</div>
				</div>

				<div className="item">
					<div>Delivery Charges</div>
					<div>FREE</div>
				</div>

				<div className="item">
					<div>Grand Total</div>
					<div>${totalPrice.toFixed(2)}</div>
				</div>
			</div>

			<div className="title">Deliver To</div>

			<div className="order-items-wrapper addr-item"></div>

			<button className="btn btn-primary place-order" onClick={displayRazorpay}>
				Place Order
			</button>
		</div>
	);
}

export { OrderDetails };
