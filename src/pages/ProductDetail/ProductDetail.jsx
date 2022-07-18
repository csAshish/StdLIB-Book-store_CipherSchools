import React from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import { useProduct } from "../filters/Product-context";
import { useWishlistServerCalls } from "../wishlist/useWishlistServerCalls";
import { useCartServerCalls } from "../cart/useCartServerCalls";

function ProductDetail() {
	const { productId } = useParams();
	const { filteredProducts } = useProduct();
	const { addToWishlist } = useWishlistServerCalls();
	const { addToCart } = useCartServerCalls();

	const getProduct = () => {
		return filteredProducts.find((element) => element._id === productId);
	};
	const product = getProduct();
	const { title, author, rating, productImage, price } = product;

	return (
		<div>
			<h1 className="productId">Product Details</h1>

			<main className="product-details">
				<div className="center3 sp-page-image">
					<div className="container cart-box">
						<div className="img_container">
							<img
								className="img1 single-page-pimage"
								src={productImage}
								alt="place-img"
							/>
						</div>
					</div>
				</div>

				<div className="center3 product-description">
					<div className="container3-3">
						<div className="card p-2">
							<div className="card">
								<h2 className="head2 text-xmd p-2 font-semibold">{title}</h2>
								<h3 className="head3 p-2">by {author}</h3>
								<h3 className="price-tag">$ {price}</h3>
								<h3 className="price-tag">{rating}⭐</h3>

								<h3 className="publish-review text-md text-justify">
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Dolor, autem, amet veritatis deserunt odit officiis qui
										consectetur cupiditate pariatur commodi explicabo culpa aut
										eius repellendus molestiae sed impedit? Iure, libero.
									</p>
								</h3>
								<div className="buttons">
									<button
										onClick={() => addToWishlist({ ...product })}
										value="wishlist"
										type="button"
									>
										<i className="fas fa-heart"></i>Wishlist
									</button>
									<button
										onClick={() => addToCart({ ...product })}
										value="cart"
										type="button"
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export { ProductDetail };
