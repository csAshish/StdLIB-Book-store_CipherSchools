import { React, useState, useEffect } from "react";
import { useProduct } from "../../filters/Product-context";

function Drawer({ drawerVisible }) {
	// hiding drawer on small screen size
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const { state, dispatch } = useProduct();
	return (
		<section
			style={{ display: width <= 800 && drawerVisible ? "none" : "block" }}
			className="filter-drawer"
		>
			<div className="filter-header">
				<h3>Filters</h3>
				<button onClick={() => dispatch({ type: "CLEAR" })} className="btn">
					Clear
				</button>
			</div>
			<span className="hr_line-book"></span>
			<div className="filter-category filter">
				<h4>Category</h4>
				<label htmlFor="fiction">
					<input
						onChange={(e) =>
							dispatch({ type: "CATEGORY", payload: e.target.id })
						}
						type="checkbox"
						id="fiction"
						value="fiction"
						checked={state["category"].includes("fiction")}
					/>
					Fiction
				</label>

				<label htmlFor="Horror">
					<input
						onChange={(e) =>
							dispatch({ type: "CATEGORY", payload: e.target.id })
						}
						type="checkbox"
						id="horror"
						value="horror"
						checked={state["category"].includes("horror")}
					/>
					Horror
				</label>

				<label htmlFor="Children & Teens">
					<input
						onChange={(e) =>
							dispatch({ type: "CATEGORY", payload: e.target.id })
						}
						type="checkbox"
						id="children & teens"
						value="children & teens"
						checked={state["category"].includes("children & teens")}
					/>
					Children & Teens
				</label>

				<label htmlFor="Personal Development">
					<input
						onChange={(e) =>
							dispatch({ type: "CATEGORY", payload: e.target.id })
						}
						type="checkbox"
						id="personal development"
						value="personal development"
						checked={state["category"].includes("personal development")}
					/>
					Personal Development
				</label>
			</div>
			<span className="hr_line-book"></span>
			<div className="filter-price filter">
				<h4>Price range</h4>
				<label htmlFor="include-outofstock">
					<input
						type="range"
						name="price-range"
						id="price-range"
						min="0"
						max="600"
						step="50"
						list="tickmarks"
						value={state.priceRange}
						onChange={(e) =>
							dispatch({ type: "PRICERANGE", payload: e.target.value })
						}
					/>
					<datalist id="tickmarks">
						<option value="0" label="0"></option>
						<option value="100"></option>
						<option value="200"></option>
						<option value="300"></option>
						<option value="400"></option>
						<option value="500"></option>
						<option value="600" label="600"></option>
					</datalist>
				</label>
			</div>
			<span className="hr_line-book"></span>
			<div className="filter-price filter">
				<h4>Sort by</h4>
				<label htmlFor="low-price">
					<input
						onChange={() =>
							dispatch({ type: "LOWTOHIGH", payload: "lowtohigh" })
						}
						type="radio"
						id="low-price"
						value="low"
						name="price"
						checked={state.sorting === "lowtohigh"}
					/>
					Price - Low to High
				</label>
				<label htmlFor="high-price">
					<input
						onChange={() =>
							dispatch({ type: "HIGHTOLOW", payload: "hightolow" })
						}
						type="radio"
						id="high-price"
						value="high"
						name="price"
						checked={state.sorting === "hightolow"}
					/>
					Price - High to Low
				</label>
			</div>
			<span className="hr_line-book"></span>
			<div className="filter-price filter">
				<h4>In Stack</h4>
				<label htmlFor="include-outofstock">
					<input
						onChange={() => dispatch({ type: "STOCKEDPRODUCTS" })}
						type="checkbox"
						id="inStock"
						value="low"
						name="inStock"
						checked={state.inStock}
					/>
					In Stock
				</label>
				<label htmlFor="fast-delivery">
					<input
						onChange={() => dispatch({ type: "FASTDELIVERY" })}
						type="checkbox"
						id="fastDelivery"
						value="high"
						name="fastDelivery"
						checked={state.fastDelivery}
					/>
					Fast Delivery Only
				</label>
			</div>

			<span className="hr_line-book"></span>
			<div className="filter-rating filter">
				<h4>Rating</h4>
				<label htmlFor="rating-4">
					<input
						onChange={(e) => dispatch({ type: "RATING", payload: e.target.id })}
						type="radio"
						id="4"
						value="4"
						name="rating"
						checked={state.rating === "4"}
					/>
					4 Stars & above
				</label>
				<label htmlFor="rating-3">
					<input
						onChange={(e) => dispatch({ type: "RATING", payload: e.target.id })}
						type="radio"
						id="3"
						value="3"
						name="rating"
						checked={state.rating === "3"}
					/>
					3 Stars & above
				</label>
				<label htmlFor="rating-2">
					<input
						onChange={(e) => dispatch({ type: "RATING", payload: e.target.id })}
						type="radio"
						id="2"
						value="2"
						name="rating"
						checked={state.rating === "2"}
					/>
					2 Stars & above
				</label>
				<label htmlFor="rating-1">
					<input
						onChange={(e) => dispatch({ type: "RATING", payload: e.target.id })}
						type="radio"
						id="1"
						value="1"
						name="rating"
						checked={state.rating === "1"}
					/>
					1 Stars & above
				</label>
			</div>
		</section>
	);
}

export { Drawer };
