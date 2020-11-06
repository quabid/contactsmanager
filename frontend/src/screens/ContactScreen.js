import React from 'react';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContactCard from '../components/ContactCard';

const ContactScreen = ({ match }) => {
  const id = match.params.id;
  return <ContactCard id={id} />;
};

export default ContactScreen;
