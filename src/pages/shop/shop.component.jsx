import React, { useState } from 'react';
import { SHOP_DATA } from '../../data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     return <div className='shop-page'>

//     </div>;
//   }
// }

function ShopPage() {
  const [data, setData] = useState(SHOP_DATA);
  console.log(data);
  return (
    <div className='shop-page'>
      {/* {data.map({ id, ...otherProps } => (
        <div></div>
      ))} */}
      {data.map((items) => {
        const { id, ...otherProps } = items;
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
}

export default ShopPage;
