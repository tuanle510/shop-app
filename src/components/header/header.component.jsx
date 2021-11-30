import React, { useContext } from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { AuthContext } from '../../Context/AuthProvider';

import { auth } from '../../firebase/firebase.utils';

function Header() {
  const data = useContext(AuthContext);
  console.log(data);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {data ? console.log(true) : console.log(false)}

        {data ? (
          <div className='signout'>
            <p className='signout-btn' onClick={() => auth.signOut()}>
              SIGN OUT
            </p>
            <p className='signout-btn'>Hello {data.displayName}</p>
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
