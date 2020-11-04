import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';

const SignupScreen = ({ location, history }) => {
  useEffect(() => {
    document.title = 'Sign Up';
  });

  return (
    <div className="my-3">
      <SignupForm location={location} history={history} />
    </div>
  );
};

export default SignupScreen;
