import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`shop/${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
