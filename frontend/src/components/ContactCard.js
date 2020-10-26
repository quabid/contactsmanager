import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  return (
    <Card>
      <span
        className='font-weight-bold text-secondary mx-3 my-3'
        style={{ fontSize: '1.1rem' }}
      >
        <Link to='/api/contacts'>Go Back</Link>
      </span>
      <Card.Header>
        <h1 className='h2'>
          {contact.fname.substring(0, 1).toUpperCase()}
          {contact.fname.substring(1)}{' '}
          {contact.lname.substring(0, 1).toUpperCase()}
          {contact.lname.substring(1)}
        </h1>
      </Card.Header>
    </Card>
  );
};

export default ContactCard;
