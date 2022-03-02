import React from 'react';
import CustomButton from '../button/custom-button.component';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItems from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem}></CartItems>
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
