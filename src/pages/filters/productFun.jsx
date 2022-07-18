import {initialFilters} from "./initialFilters";
export const productFun = (state, action) => {
    switch (action.type) {
      case "LOWTOHIGH": return { ...state, sorting: action.payload };
      case "HIGHTOLOW": return { ...state, sorting: action.payload };
      case "STOCKEDPRODUCTS": return { ...state, inStock: !state.inStock };
      case "FASTDELIVERY": return { ...state, fastDelivery: !state.fastDelivery };
      case "PRICERANGE": return { ...state, priceRange: action.payload };
      case "RATING": return{...state, rating: action.payload};
      case "CATEGORY": return{...state, category: state["category"].includes(action.payload) 
        ? state["category"].filter(category => category !== action.payload)
        : state["category"].concat(action.payload)};
      case "CLEAR": return initialFilters ;
      default: return state;
    }
  };
