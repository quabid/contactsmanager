import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import SignupForm from '../components/SignupForm';

export const SigninLink = () => (
  <Col xs={12}>
    <Link
      className='link text-white text-center font-weight-bolder d-inline-block mx-auto'
      to={'/login'}
    >
      Sign In
    </Link>
  </Col>
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
