export const reducer = (wishlist_state, action) => {
	switch (action.type) {
		case "ADD-TO-WISHLIST":
			return {
				...wishlist_state,
				quantity: action.payload.length,
				items: [...action.payload],
			};
		case "REMOVE-FROM-WISHLIST":
			return {
				...wishlist_state,
				quantity: action.payload.length,
				items: [...action.payload],
			};
		default:
			return wishlist_state;
	}
};
