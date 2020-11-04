import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SigninForm from '../components/SigninForm';

const SigninScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split('=')[1] : '/';

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <SigninForm location={location} history={history} />
        </Col>
      </Row>

      <Row className="py-3">
        <Col xs={12}>
          <Link
            className="link"
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
          >
            New user?{' '}
          </Link>
        </Col>

        <Col xs={12}>
          <Link
            className="link"
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
          >
            Need help with logging in?
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SigninScreen;
