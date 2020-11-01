import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SigninForm = () => {
  useEffect(() => {
    document.title = 'Sign In';
  });

  return (
    <Form className="signin-form">
      <Form.Group controlId="email">
        <Form.Label className="font-weight-bolder">Email address</Form.Label>
        <Form.Control
          style={{ background: 'transparent' }}
          type="email"
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
          style={{ background: 'transparent' }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SigninForm;
