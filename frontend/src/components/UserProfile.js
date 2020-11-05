import React, { useState, useEffect } from 'react';

import { Form, Card, Row, Col, Button } from 'react-bootstrap';

const UserProfile = ({ userDetail }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(false);

  useEffect(() => {
    setFirstName(userDetail ? userDetail.fname : 'First Name');
    setLastName(userDetail ? userDetail.lname : 'Last Name');
    setEmail(userDetail ? userDetail.email : 'Email');
    setImage(userDetail ? (userDetail.image ? true : false) : false);
  }, [userDetail]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Profile changed');
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <Card style={{ background: 'transparent', fontSize: '2rem' }}>
      <Row>
        <Col md={4} xs={12}>
          <Col xs={12}>
            <Card.Title
              className='font-weight-bolder text-white text-center'
              style={{ background: 'transparent', fontSize: '2rem' }}
            >
              {userDetail.fname.substring(0, 1).toUpperCase() +
                userDetail.fname.substring(1) +
                ' ' +
                userDetail.lname.substring(0, 1).toUpperCase() +
                userDetail.lname.substring(1)}
            </Card.Title>
          </Col>
          <Col className='text-center' xs={12}>
            {image ? (
              <Card.Img src={userDetail.image} alt={userDetail.email} />
            ) : (
              <i className='fas fa-user fa-4x fw'></i>
            )}
          </Col>
        </Col>
        <Col md={8} xs={12}>
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

              <Button variant='outline-primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
