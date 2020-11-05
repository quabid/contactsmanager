import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

export const SigninLink = () => (
  <Link className='link text-white m-auto' to={'/login'}>
    Sign In
  </Link>
);

const SignupScreen = ({ location, history }) => {
  useEffect(() => {
    document.title = 'Sign Up';
  });

  return (
    <div className='my-3'>
      <SignupForm location={location} history={history} />
    </div>
  );
};

export default SignupScreen;
