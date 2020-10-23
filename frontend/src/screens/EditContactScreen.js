import React from 'react';
import ContactCard from '../components/ContactCard';
import { Container } from 'react-bootstrap';

const ContactScreen = ({ match }) => {
  return (
    <Container fluid>
      <ContactCard id={match.params.id} />
    </Container>
  );
};

export default ContactScreen;
