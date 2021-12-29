import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { sections } from '../../data';

function Directory() {
  const data = sections;
  return (
    <div className='directory-menu'>
      {data.map(({ id, ...ortherSectionProps }) => {
        // console.log({ ...ortherSectionProps });
        return <MenuItem key={id} {...ortherSectionProps} />;
      })}
    </div>
  );
}

export default Directory;
