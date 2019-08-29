import * as types from './../types/cart';

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product,
});
