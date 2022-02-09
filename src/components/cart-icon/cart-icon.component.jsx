import React from 'react';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

function CartIcon() {
  const dispatch = useDispatch();
  const hiddenCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className='cart-icon' onClick={hiddenCart}>
      <BagIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;
