import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer/cart';

const store = createStore(combineReducers({
  cart: cartReducer,
}));

export default store;