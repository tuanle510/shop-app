import React from 'react';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

function CartIcon() {
  const dispatch = useDispatch();
  const hiddenCart = () => {
    dispatch(toggleCartHidden());
  };

  // lấy ra cartItems trong st
  const itemCount = useSelector(({ cart: { cartItems } }) =>
    cartItems.reduce(
      (acumalatedQuantity, cartItem) => acumalatedQuantity + cartItem.quantity,
      0
    )
  );

  return (
    <div className='cart-icon' onClick={hiddenCart}>
      <BagIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

export default CartIcon;
