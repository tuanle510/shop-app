import React from 'react';
import CustomButton from '../button/custom-button.component';
import { useSelector } from 'react-redux';

import CartItems from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem}></CartItems>
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
