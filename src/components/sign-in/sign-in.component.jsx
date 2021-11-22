import React, { useState } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const [signIn, setSignIn] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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

        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
