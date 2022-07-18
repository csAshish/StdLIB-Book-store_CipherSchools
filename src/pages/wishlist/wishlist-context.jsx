import { createContext, useContext, useReducer } from "react";
import { reducer } from "./wishlist_reducer_fn";

const WishlistContext = createContext();

const WhishlistProvider = ({ children }) => {
	const [wishlist_state, wishlist_dispatch] = useReducer(reducer, {
		quantity: 0,
		msg: "",
		items: [],
	});

	return (
		<WishlistContext.Provider value={{ wishlist_state, wishlist_dispatch }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WhishlistProvider };
