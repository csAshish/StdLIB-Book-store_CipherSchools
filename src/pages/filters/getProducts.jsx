export const getProducts = (...filters) => (state, products) =>
  filters.reduce((prev, curr) => curr(state, prev), products);
