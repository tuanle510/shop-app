import React from 'react';
import './cart-item.component.scss';

function CartItems({ item }) {
  const { imageUrl, price, name, quantity } = item;
  console.log(item);
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {price} X ${quantity}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
