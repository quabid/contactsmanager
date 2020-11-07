import React from 'react';
import ContactCard from '../components/ContactCard';

const ContactScreen = ({ match }) => {
  const id = match.params.id;
  return <ContactCard id={id} />;
};

export default ContactScreen;
