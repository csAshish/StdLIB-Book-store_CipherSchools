import React from "react";
import { useCart } from "../cart/cart-context";
import { useCartServerCalls } from "./useCartServerCalls";
import { useWishlistServerCalls } from "../wishlist/useWishlistServerCalls";

function CartProducts() {
	const { cart_state } = useCart();
	const { deleteFromCart, increaseQuantity, decreaseQuantity } =
		useCartServerCalls();
	const { addToWishlist } = useWishlistServerCalls();

	function wishlistHandler(item) {
		addToWishlist({ ...item });
		deleteFromCart(item._id);
	}

	return (
		<div>
			{cart_state.items.map((item) => (
				<div key={item._id}>
					<div className="center3 cart-1">
						<div className="container cart-box">
							<div className="img_container">
								<img
									className="img1 imag-cart"
									src={item.productImage}
									alt="place-img"
								/>
								<div className="card">
									<h2 className="head2">{item.title}</h2>
									<h3 className="head3">by {item.author}</h3>
									<h3 className="price-tag">$ {item.price}</h3>
									<h3 className="publish-review">{item.rating} ⭐</h3>
									<div className="cart-quntity">
										<button
											className="item-quantity cursor"
											onClick={() => decreaseQuantity(item._id)}
											disabled={item.qty === 1}
										>
											-
										</button>
										<p>{item.qty}</p>
										<button
											className="item-quantity cursor"
											onClick={() => increaseQuantity(item._id)}
										>
											+
										</button>
									</div>
									<div className="buttons">
										<button
											onClick={() => deleteFromCart(item._id)}
											type="button"
										>
											REMOVE
										</button>
										<button onClick={() => wishlistHandler(item)} type="button">
											<i className="fas fa-heart"></i>Wishlist
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export { CartProducts };
