import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const logOut = () => {
    dispatch(setCurrentUser());
    auth.signOut();
  };
  // console.log(user);
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
        {user.currentUser != null ? console.log(true) : console.log(false)}

        {user.currentUser ? (
          <div className='option' onClick={logOut}>
            LOG OUT
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
