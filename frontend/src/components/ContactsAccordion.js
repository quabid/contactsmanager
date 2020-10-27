import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  Card,
  Jumbotron,
  Row,
  Col,
  CardImg,
  Form,
} from 'react-bootstrap';

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
                <Col md={12} xs={12}>
                  {contact.image ? (
                    <CardImg alt={contact.fname} src={contact.image} />
                  ) : (
                    <i className='fas fa-user fa-4x fw'></i>
                  )}
                </Col>

                <Col md={12} xs={12} style={{ fontSize: '1.2rem' }}>
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

                <Col md={12} xs={12}>
                  <Form.Group controlId='exampleForm.SelectCustom'>
                    <Form.Label
                      className='font-weight-bolder text-secondary mb-0'
                      style={{ fontSize: '1.2rem' }}
                    >
                      Phones
                    </Form.Label>
                    <Form.Control as='select' custom>
                      {contact.phones.map((ph, ind) => (
                        <option key={ind}>{ph.phone}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col md={12} xs={12}>
                  <Form.Group controlId='exampleForm.SelectCustom'>
                    <Form.Label
                      className='font-weight-bolder text-secondary mb-0'
                      style={{ fontSize: '1.2rem' }}
                    >
                      Emails
                    </Form.Label>
                    <Form.Control as='select' custom>
                      {contact.emails.map((em, ind) => (
                        <option key={ind}>{em.email}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Jumbotron>
            <Row className='my-3 text-center' style={{ fontSize: '1.2rem' }}>
              <Col className='my-2' md={6} xs={12}>
                <Link
                  className='text-primary '
                  to={`/api/contact/${contact.id}`}
                >
                  <span className='btn btn-primary d-inline-block font-weight-bold'>
                    &nbsp; <i className='fas fa-pencil-alt fw'></i> Edit &nbsp;
                  </span>
                </Link>
              </Col>

              <Col className='text-danger my-2' md={6} xs={12}>
                <span className='btn btn-danger d-inline-block border rounded font-weight-bold'>
                  <i className='fas fa-trash-alt fw'></i> Remove
                </span>
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
