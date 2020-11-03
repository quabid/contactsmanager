/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/UserActions';

const SigninForm = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // @ts-ignore
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect =
    location !== undefined
      ? location.search
        ? location.search.split('=')[1]
        : '/'
      : '/';

  useEffect(() => {
    document.title = 'Sign In';
    if (userInfo) {
      history && history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    // Dispatch
    console.log(
      `\n\n\t\t\tDispatch to login: Email ${email} and Password ${password}`
    );

    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1 className="h1">Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} className="signin-form my-3">
        <Form.Group controlId="email">
          <Form.Label className="font-weight-bolder">Email address</Form.Label>
          <Form.Control
            className="text-white"
            size="lg"
            style={{ background: 'transparent', color: '#fff' }}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text
            className="text-muted font-weight-bolder"
            style={{ fontSize: '1rem' }}
          ></Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="font-weight-bolder">Password</Form.Label>
          <Form.Control
            className="text-white"
            size="lg"
            style={{ background: 'transparent' }}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>

      <Row className="py-3">
        <Col xs={12} md={6}>
          New user?{' '}
          <Link
            className="link"
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
          />
        </Col>

        <Col xs={12} md={6}>
          Forgot username or password?{' '}
          <Link
            className="link"
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
          />
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SigninForm;
