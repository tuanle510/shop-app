import React from 'react';
import { useDispatch } from 'react-redux';

import './collection-item.style.scss';
import CustomButton from '../button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  // console.log(imageUrl);
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addItem(item));
  };
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomButton onClick={handleAddCart} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
