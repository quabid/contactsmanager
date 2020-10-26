import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Jumbotron, Row, Col, CardImg } from 'react-bootstrap';

const ContactsAccordion = ({ contacts }) => {
  const accordion = contacts.map((contact) => {
    return (
      <Card key={contact.id}>
        <Accordion.Toggle as={Card.Header} eventKey={contact.id}>
          <span className='font-weight-bolder text-primary'>
            {contact.fname.substring(0, 1).toUpperCase()}
            {contact.fname.substring(1)}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={contact.id}>
          <Card.Body>
            <Jumbotron className='mx-0 my-0 px-1 py-1 text-center border rounded'>
              <Row>
                <Col md={3} xs={12}>
                  {contact.image ? (
                    <CardImg alt={contact.fname} src={contact.image} />
                  ) : (
                    <i className='fas fa-user fa-4x fw'></i>
                  )}
                </Col>

                <Col md={9} xs={12} style={{ fontSize: '1.2rem' }}>
                  <p className='mx-0 my-1'>
                    <span className='font-weight-bolder text-secondary'>
                      First Name
                    </span>{' '}
                    {contact.fname.substring(0, 1).toUpperCase()}
                    {contact.fname.substring(1)}
                  </p>

                  <p className='mx-0 my-1'>
                    <span className='font-weight-bolder text-secondary'>
                      Last Name
                    </span>{' '}
                    {contact.lname.substring(0, 1).toUpperCase()}
                    {contact.lname.substring(1)}
                  </p>
                </Col>
              </Row>
            </Jumbotron>
            <Row className='my-3 text-center' style={{ fontSize: '1.2rem' }}>
              <Col className='my-2' md={6} xs={12}>
                <Link
                  className='text-success '
                  to={`/api/contact/${contact.id}`}
                >
                  <i className='fas fa-pencil-alt fw'></i>{' '}
                  <span className='text-secondary font-weight-bold'>Edit</span>
                </Link>
              </Col>

              <Col className='text-danger my-2' md={6} xs={12}>
                <i className='fas fa-trash-alt fw'></i>{' '}
                <span className='text-secondary font-weight-bold'>Remove</span>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return <Accordion>{accordion}</Accordion>;
};

export default ContactsAccordion;
