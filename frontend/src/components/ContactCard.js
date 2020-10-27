import React from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormGroupItem from './FormGroupItem';
import { cap } from '../utils/Capper';

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
        <h1 className='h2 font-weight-bolder text-primary'>
          {cap(contact.fname)}
        </h1>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={(e) => {
                console.log(e.target);
              }}
            >
              <FormGroupItem
                handleChange={(e) => {
                  console.log('hah');
                }}
                fa='sort-alpha-down'
                type={'First Name'}
                value={contact.fname}
              />
              <FormGroupItem
                handleChange={(e) => {
                  console.log('hah');
                }}
                fa='sort-alpha-down'
                type={'Last Name'}
                value={contact.lname}
              />

              {contact.emails
                ? contact.emails.length > 0
                  ? contact.emails.map((em, ind) => (
                      <FormGroupItem
                        key={ind}
                        handleChange={(e) => {
                          console.log('hah');
                        }}
                        fa='envelope'
                        type={em.type}
                        value={em.email}
                      />
                    ))
                  : null
                : null}

              {contact.phones
                ? contact.phones.length > 0
                  ? contact.phones.map((ph, ind) => (
                      <FormGroupItem
                        key={ind}
                        handleChange={(e) => {
                          console.log('hah');
                        }}
                        fa='phone'
                        type={ph.type}
                        value={ph.phone}
                      />
                    ))
                  : null
                : null}
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
