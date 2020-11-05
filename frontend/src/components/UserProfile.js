import React, { useState, useEffect } from 'react';

import { Form, Card, Row, Col } from 'react-bootstrap';

const UserProfile = ({ userDetail }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setFirstName(userDetail ? userDetail.fname : 'First Name');
    setLastName(userDetail ? userDetail.lname : 'Last Name');
    setEmail(userDetail ? userDetail.email : 'Email');
  }, [userDetail]);

  const submitHandler = () => {
    console.submit('Profile changed');
  };

  return (
    <Card style={{ background: 'transparent', fontSize: '2rem' }}>
      <Row>
        <Col>
          <Card.Title
            className='font-weight-bolder text-white text-center'
            style={{ background: 'transparent', fontSize: '2rem' }}
          >
            {firstName + ' ' + lastName}
          </Card.Title>
        </Col>
        <Col>
          <Card.Body style={{ background: 'transparent' }}>
            <Form onSubmit={submitHandler} className='signin-form my-5'>
              <Form.Group controlId='fname'>
                <Form.Label className='font-weight-bolder'>
                  First Name
                </Form.Label>
                <Form.Control
                  className='text-white'
                  size='lg'
                  style={{ background: 'transparent', color: '#fff' }}
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='lname'>
                <Form.Label className='font-weight-bolder'>
                  Last Name
                </Form.Label>
                <Form.Control
                  className='text-white'
                  size='lg'
                  style={{ background: 'transparent', color: '#fff' }}
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label className='font-weight-bolder'>Email</Form.Label>
                <Form.Control
                  className='text-white'
                  size='lg'
                  style={{ background: 'transparent', color: '#fff' }}
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
