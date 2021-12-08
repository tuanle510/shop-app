import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // Khi có sự thay đổi auth
    const unsubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(setCurrentUser({ displayName, email, uid, photoURL }));
        return; // khi thành công thì dừng luôn, nếu không sẽ quay lại trang signin
      }
    });

    // clean function
    return () => {
      unsubcribed();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route
          path='signin'
          element={user ? <Navigate to='/' replace /> : <SignInAndSignUp />}
        />
      </Routes>
    </>
  );
};

export default App;
