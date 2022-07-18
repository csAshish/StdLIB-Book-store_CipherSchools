export function sortByPrice(state, products) {
  const sortedProducts = products.sort((a, b) => a["price"] - b["price"]);
  if (state.sorting === "lowtohigh") return sortedProducts;
  if (state.sorting === "hightolow") return products.sort((a, b) => b["price"] - a["price"]);
  return products;
}

export function inStock(state, products) {
  return state.inStock ? products.filter((product) => product.inStock) : products;
}

export function fastDelivery(state, products) {
return state.fastDelivery ? products.filter((product) => product.isFastDelivery) : products;
}

export function rating(state, products) {
return products.filter(
  (product) => Number(product.rating) >= Number(state.rating)
);
}

export function priceRange(state, products) {
return products.filter(
  (product) =>
    Number(product.price) <= Number(state.priceRange)
);
}

export function category(state, products) {
return state["category"].length === 0
  ? products
  : products.filter((product) =>
      state["category"].includes(product.categoryName)
    );
}