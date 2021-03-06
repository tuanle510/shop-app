import React from 'react';
import './preview-collection.style.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4) // chỉ lấy ra 4
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
