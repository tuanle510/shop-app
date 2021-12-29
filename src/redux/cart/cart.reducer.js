import { CartActionTypes } from './cart.types';

// Tạo giá trị ban đầu
const INITIAL_STATE = {
  hidden: true,
};

// tạo reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
