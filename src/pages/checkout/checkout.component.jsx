import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './checkout.style.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acumalatedQuantity, cartItem) =>
      acumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className='total'>
        <span>Total: ${total}</span>
      </div>
    </div>
  );
}

export default Checkout;
