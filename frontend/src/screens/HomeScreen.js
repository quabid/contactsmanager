import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <div className='overlay'></div>
      <Container
        variant='place-content-center'
        className='text-center home-screen'
      >
        <Row className='my-4'>
          <Col xs={12}>
            <h1 className='h1 text-bolder'>Contact Management</h1>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col xs={12}>
            <p className='lead font-weight-bold' style={{ fontSize: '1.3rem' }}>
              Manage your personal and professional contacts in one place.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
