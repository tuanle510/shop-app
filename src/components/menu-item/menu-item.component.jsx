import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  // console.log(history);
  // console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);
