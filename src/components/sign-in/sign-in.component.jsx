import React, { useState } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component';

//
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          value={password}
          handleChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
