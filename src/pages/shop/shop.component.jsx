import React from 'react';
import { SHOP_DATA } from '../../data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

function ShopPage() {
  const data = SHOP_DATA;
  return (
    <div className='shop-page'>
      {data.map((items) => {
        const { id, ...otherProps } = items;
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
}

export default ShopPage;
