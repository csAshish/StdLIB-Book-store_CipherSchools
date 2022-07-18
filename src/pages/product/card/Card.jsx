import React from "react";
import { useProduct } from "../../filters/Product-context";
import { ProductCard } from "./ProductCard";

function Card({ drawerVisible, setDrawerVisible, search }) {
	const { filteredProducts } = useProduct();

	const searchedProducts = filteredProducts.filter(
		(product) =>
			product.title.toLowerCase().includes(search.toLowerCase()) ||
			product.author.toLowerCase().includes(search.toLowerCase()) ||
			product.categoryName.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<section className="cards_for-book">
			{filteredProducts.length === 0 && searchedProducts.length === 0 ? (
				<h3>Products Loading...</h3>
			) : searchedProducts.length === 0 ? (
				<p className="text-center mt-2 text-lg">No Results Found!</p>
			) : (
				searchedProducts.map((product) => (
					<ProductCard product={product} key={product._id} />
				))
			)}

			<div className="filter_btn-book">
				<button
					onClick={() => setDrawerVisible((visible) => !visible)}
					type="button"
					className="btn_for-StdLib"
				>
					{drawerVisible ? (
						<i className="fas fa-filter"></i>
					) : (
						<i className="fas fa-xmark"></i>
					)}
				</button>
			</div>
		</section>
	);
}

export { Card };
