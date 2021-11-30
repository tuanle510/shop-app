import React from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';

function SignInAndSignUp() {
  return (
    <div className='sign-in-and-sing-up'>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
}

export default SignInAndSignUp;
