export const reducer = (cart_state, action) => {
	switch (action.type) {
		case "ADD-TO-CART":
			return {
				...cart_state,
				quantity: action.payload.length,
				items: [...action.payload],
			};
		case "REMOVE-FROM-CART":
			return {
				...cart_state,
				quantity: action.payload.length,
				items: [...action.payload],
			};
		case "INCREMENT-DECREMENT":
			return {
				...cart_state,
				items: [...action.payload],
			};
		default:
			return cart_state;
	}
};
