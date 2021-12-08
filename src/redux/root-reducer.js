import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// tập hợp các reducer
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
