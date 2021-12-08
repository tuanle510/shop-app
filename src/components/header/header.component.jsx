import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';
// redux connect
import { connect } from 'react-redux';

function Header({ currentUser, hidden }) {
  // console.log(currentUser);
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
        {/* {currentUser ? console.log(true) : console.log(false)} */}

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
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

// state là cái store
// lấy state từ store
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  // console.log(state);
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
