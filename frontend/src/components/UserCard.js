import React from 'react';
import { Card, Row, Col, Jumbotron, CardImg } from 'react-bootstrap';
import users from '../Users';

const UserCard = ({ id }) => {
  const user = users.find(
    (u) => u.id.toString().trim() === id.toString().trim()
  );

  const cGeo = user.address.geo ? (
    <Col className='my-3 font-weight-bold' style={{ fontSize: '1.7rem' }}>
      {'Lat: ' + user.address.geo.lat + ' Lng: ' + user.address.geo.lng}
    </Col>
  ) : null;

  const image = user.image ? (
    <Row>
      <Col className='my-3'>
        <CardImg src={`${user.image}`} />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col>
        <i className='fas fa-user fa-5x fw'></i>
      </Col>
    </Row>
  );

  return (
    <Card className='text-center'>
      {image}
      <Row className='px-4 py-4 text-secondary'>
        <Col
          className='my-3 font-weight-bold'
          style={{ fontSize: '1.7rem' }}
          xs={12}
        >
          {user.name}
        </Col>
        <Col
          className='my-3 font-weight-bold'
          style={{ fontSize: '1.7rem' }}
          xs={12}
        >
          {user.username}
        </Col>
        <Col
          className='my-3 font-weight-bold'
          style={{ fontSize: '1.7rem' }}
          xs={12}
        >
          {user.email}
        </Col>
        <Col
          className='my-3 font-weight-bold'
          style={{ fontSize: '1.7rem' }}
          xs={12}
        >
          {user.phone}
        </Col>
        {cGeo}
      </Row>
      <Row>
        <Col>
          {
            <Jumbotron className='mx-0 my-0 px-2 py-2'>
              <p className='mx-0 my-0 font-weight-bolder text-center text-primary'>
                {user.address.street} {user.address.city} {user.address.zipcode}
              </p>
            </Jumbotron>
          }
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
