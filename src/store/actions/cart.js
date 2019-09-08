import * as types from './../types/cart';

export const addToCart = (product) => ({
  product,
  type: types.ADD_TO_CART,
});
