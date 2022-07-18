import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import axios from "axios";
import {
	fastDelivery,
	inStock,
	priceRange,
	sortByPrice,
	rating,
	category,
} from "./filters";
import { getProducts } from "./getProducts";
import { productFun } from "./productFun";
import { initialFilters } from "./initialFilters";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productFun, initialFilters);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/products");
				setProducts(response.data.products);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const filteredProducts = getProducts(
		sortByPrice,
		inStock,
		fastDelivery,
		priceRange,
		rating,
		category
	)(state, [...products]);

	return (
		<ProductContext.Provider value={{ filteredProducts, state, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductProvider, useProduct };
