import React from 'react';
import UserCard from '../components/UserCard';
import { Container } from 'react-bootstrap';

const UserScreen = ({ match }) => {
  return (
    <Container fluid>
      <UserCard id={match.params.id} />
    </Container>
  );
};

export default UserScreen;
