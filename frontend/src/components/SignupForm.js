import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignupForm = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  });

  return (
    <Form className="signup-form">
      <Form.Group controlId="fname">
        <Form.Label className="font-weight-bolder">First Name</Form.Label>
        <Form.Control
          size="lg"
          style={{ background: 'transparent' }}
          type="text"
          placeholder="Enter first name"
        />
        <Form.Text
          className="text-muted font-weight-bolder"
          style={{ fontSize: '1rem' }}
        ></Form.Text>
      </Form.Group>

      <Form.Group controlId="lname">
        <Form.Label className="font-weight-bolder">Last Name</Form.Label>
        <Form.Control
          size="lg"
          style={{ background: 'transparent' }}
          type="text"
          placeholder="Enter last name"
        />
        <Form.Text
          className="text-muted font-weight-bolder"
          style={{ fontSize: '1rem' }}
        ></Form.Text>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label className="font-weight-bolder">Email address</Form.Label>
        <Form.Control
          size="lg"
          style={{ background: 'transparent' }}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text
          className="text-muted font-weight-bolder"
          style={{ fontSize: '1rem' }}
        >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="pwd1">
        <Form.Label className="font-weight-bolder">Password</Form.Label>
        <Form.Control
          size="lg"
          style={{ background: 'transparent' }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="pwd2">
        <Form.Label className="font-weight-bolder">Confirm Password</Form.Label>
        <Form.Control
          size="lg"
          style={{ background: 'transparent' }}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignupForm;
