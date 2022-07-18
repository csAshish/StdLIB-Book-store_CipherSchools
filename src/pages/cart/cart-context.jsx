import { createContext, useContext, useReducer } from "react";
import { reducer } from "./cart-reducer-fn";
const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart_state, cart_dispatch] = useReducer(reducer, {
		quantity: 0,
		msg: "",
		items: [],
	});

	return (
		<CartContext.Provider value={{ cart_state, cart_dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
