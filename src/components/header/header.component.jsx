import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from '../../firebase/firebase.utils';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const hidden = useSelector((state) => state.cart.hidden);

  const logOut = () => {
    dispatch(setCurrentUser());
    auth.signOut();
  };

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

        {user.currentUser ? (
          <div className='option' onClick={logOut}>
            LOG OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

export default Header;
