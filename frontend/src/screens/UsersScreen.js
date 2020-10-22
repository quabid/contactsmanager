import React from 'react';
import { Container } from 'react-bootstrap';
import UserAccordion from '../components/UserAccordion';
import users from '../Users';

const UsersScreen = () => {
  return (
    <Container>
      <UserAccordion users={users} />
    </Container>
  );
};

export default UsersScreen;
