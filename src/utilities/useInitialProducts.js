import { useState, useEffect } from "react";
import axios from "axios";

function useInitialProducts() {
	const [products, getProducts] = useState([]);

	useEffect(() => {
		try {
			(async () => {
				const response = await axios.get("/api/products");
				getProducts(response.data.products);
			})();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return { products };
}

export { useInitialProducts };
