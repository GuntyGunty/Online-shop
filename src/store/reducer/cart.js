import * as types from '../types/cart';

const initialState = {
  products: [],
}

export default (state = initialState, action) => {
  const { products } = state;
  
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        products: [...products, action.product],
      }
    default:
      return { ...state }
  }
}