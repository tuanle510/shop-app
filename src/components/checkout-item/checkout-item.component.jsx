import React from 'react';
import './checkout-item.style.scss';
import { useDispatch } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';

function CheckoutItem({ cartItem }) {
  console.log(cartItem);
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => dispatch(removeItem(cartItem))} className='arrow'>
          &#10094;
        </div>
        <div className='value'>{quantity}</div>
        <div onClick={() => dispatch(addItem(cartItem))} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        onClick={() => dispatch(clearItem(cartItem))}
        className='remove-button'
      >
        &#10005;
      </span>
    </div>
  );
}

export default CheckoutItem;
