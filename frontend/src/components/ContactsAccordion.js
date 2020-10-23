import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Row, Col, Container } from 'react-bootstrap';

const UserAccordion = ({ users }) => {
  const userItems = users.map((user) => (
    <Card key={user.id}>
      <Accordion.Toggle
        className='font-weight-bolder text-secondary'
        as={Card.Header}
        eventKey={user.id}
      >
        {user.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={user.id}>
        <Card.Body>
          <Card.Title className='text-primary'>{user.name}</Card.Title>
          <Container>
            <Row>
              <Col md={4}>
                <i className='fas fa-user fa-4x fw'></i>
              </Col>
              <Col className='my-3' md={8}>
                <Row className='d-none d-md-flex d-sm-none'>
                  <Col className='font-weight-bolder text-secondary'>
                    Username
                  </Col>
                  <Col className='font-weight-bolder text-secondary'>Email</Col>
                  <Col className='font-weight-bolder text-secondary'>Phone</Col>
                </Row>
                <Row>
                  <Col className='mb-2' md={4} sm={12}>
                    {user.username}
                  </Col>
                  <Col className='mb-2' md={4} sm={12}>
                    {user.email}
                  </Col>
                  <Col className='mb-2' md={4} sm={12}>
                    {user.phone}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='my-3 text-center'>
              <Col className='my-3' md={6}>
                <Link
                  className='btn btn-outline-primary inline-block'
                  to={`/api/users/edit/${user.id}`}
                >
                  <i className='fas fa-pencil-alt fw fa-2x'></i> Edit
                </Link>
              </Col>
              <Col className='my-3' md={6}>
                <Link
                  className='btn btn-outline-danger inline-block'
                  to={`/api/users/delete/${user.id}`}
                >
                  <i className='fas fa-trash fw fa-2x'></i> Delete
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));

  return <Accordion>{userItems}</Accordion>;
};

export default UserAccordion;
