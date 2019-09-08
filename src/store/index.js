import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer/cart';
import userReducer from './reducer/user';

const store = createStore(combineReducers({
  cart: cartReducer,
  user: userReducer,
}));

export default store;