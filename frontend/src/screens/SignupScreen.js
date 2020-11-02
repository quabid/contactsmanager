import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';

const SignupScreen = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  });

  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupScreen;
