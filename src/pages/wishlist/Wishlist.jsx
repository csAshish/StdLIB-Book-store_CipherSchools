import React from "react";
import { useWishlist } from "./wishlist-context";
import { Link } from "react-router-dom";
import { useCartServerCalls } from "../cart/useCartServerCalls";
import { useWishlistServerCalls } from "./useWishlistServerCalls";

function Wishlist() {
	const { wishlist_state } = useWishlist();
	const { deleteFromWishlist } = useWishlistServerCalls();
	const { addToCart } = useCartServerCalls();

	function cartHandler(item) {
		addToCart({ ...item });
		deleteFromWishlist(item._id);
	}

	return (
		<div>
			<h1 className="first">Wishlist({wishlist_state.quantity})</h1>

			<div className="cards_for-wish">
				{wishlist_state.quantity === 0 ? (
					<section className="cards_for-book">
						<div className="card-vertical flex-items bg-wishlist">
							<div className="image-container badge-container">
								<img
									src={require("../../assets/empty-wishlist.png")}
									className="img-responsive wish-empty-img"
									alt="wishlist-img"
								/>
							</div>
							<div className="text-container">
								<h3 className="price-tag">Your wishlist is empty!</h3>
								<h4 className="heading-primary">
									Explore more and shortlist some items
								</h4>
								<div className="buttons empty-cart-btn">
									<Link to="/product">
										<button className="empty-cart-btn">START SHOPPING</button>
									</Link>
								</div>
							</div>
						</div>
					</section>
				) : (
					wishlist_state.items.map((item) => (
						<div key={item._id}>
							<section className="cards_for-book">
								<div className="card-vertical flex-items">
									<button
										onClick={() => deleteFromWishlist(item._id)}
										className="button-close-wishlist"
									>
										<i className="fa-solid fa-xmark"></i>
									</button>
									<div className="image-container badge-container">
										<img
											src={item.productImage}
											className="img-responsive card-img"
											alt="product-img"
										/>
										<span className="badge bg-primary">#1Bestseller</span>
									</div>
									<div className="text-container">
										<h3 className="price-tag">$ {item.price}</h3>
										<h4 className="heading-primary">{item.title}</h4>
										<p className="sub-heading">{item.author}</p>
										<h3 className="price-tag">{item.rating}⭐</h3>

										<div className="buttons">
											<button onClick={() => cartHandler(item)}>
												<Link to="/cart">Move to Cart</Link>
											</button>
										</div>
									</div>
								</div>
							</section>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export { Wishlist };
