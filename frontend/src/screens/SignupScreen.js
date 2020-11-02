import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';

const SignupScreen = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  });

  return (
    <div className='my-3'>
      <SignupForm />
    </div>
  );
};

export default SignupScreen;
