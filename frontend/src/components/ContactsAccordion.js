import React, { useState, useEffect } from 'react';
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
import bunyan from 'bunyan';
import PhoneFormGroup from '../components/PhoneFormGroup';
import EmailFormGroup from '../components/EmailFormGroup';
import NameFormGroup from '../components/NameFormGroup';

const logger = bunyan.createLogger({
  name: 'ContactsAcccordion Component',
});

const ContactsAccordion = ({ contacts }) => {
  const [emails, setEmails] = useState(null);
  const [phones, setPhones] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setEmails([]);
    setPhones([]);
    return () => {
      setEmails(null);
      setPhones([]);
      setFirstName('');
      setLastName('');
    };
  }, [setEmails, setPhones, setFirstName, setLastName]);

  const saveChanges = obj => {
    switch (obj.type) {
      case 'email':
        logger.info(
          `${obj.type} changed category to ${obj.category} and value to ${obj.value}`
        );
        emails.push({
          type: obj.type,
          category: obj.category,
          value: obj.value,
        });
        break;

      case 'phone':
        logger.info(
          `${obj.type} changed category to ${obj.category} and value to ${obj.value}`
        );
        phones.push({
          type: obj.type,
          category: obj.category,
          value: obj.value,
        });
        break;

      case 'name':
        logger.info(
          `${obj.type} changed ${obj.type} to ${obj.fname} and ${obj.lname}`
        );
        setFirstName(obj.fname);
        setLastName(obj.lname);
        break;

      default:
        return;
    }
  };

  const accordion = contacts.map(contact => {
    return (
      <Card
        key={contact._id}
        className="text-white my-1"
        style={{ background: 'transparent', fontSize: '1.9rem' }}
      >
        <Accordion.Toggle as={Card.Header} eventKey={contact._id}>
          <span className="font-weight-bolder text-white">
            {contact.fname.substring(0, 1).toUpperCase()}
            {contact.fname.substring(1)}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={contact._id}>
          <Card.Body
            className="text-white border border-white"
            style={{ background: 'transparent', fontSize: '1.9rem' }}
          >
            <Jumbotron
              className="mx-0 my-0 px-1 py-1 text-center text-white"
              style={{ background: 'transparent', fontSize: '1rem' }}
            >
              <Row>
                <Col xs={12}>
                  {contact.image ? (
                    <CardImg alt={contact.fname} src={contact.image} />
                  ) : (
                    <i className="fas fa-user fa-8x fw"></i>
                  )}
                </Col>

                <Col xs={12} style={{ fontSize: '1.2rem' }}>
                  <p className="mx-0 my-1">
                    {contact.fname.substring(0, 1).toUpperCase()}
                    {contact.fname.substring(1)}{' '}
                    {contact.lname.substring(0, 1).toUpperCase()}
                    {contact.lname.substring(1)}
                  </p>
                </Col>

                <Col xs={12} style={{ fontSize: '1.2rem' }}>
                  <Form>
                    <Row>
                      <Col>
                        <h2 className="h5 text-left">Name</h2>
                        <NameFormGroup
                          firstName={contact.fname}
                          lastName={contact.lname}
                          dropData={saveChanges}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2 className="h5 text-left">Phones</h2>
                        {contact.phones.map((phone, index) => (
                          <PhoneFormGroup
                            key={index + 1}
                            phone={phone.phone}
                            category={phone.category}
                            dropData={saveChanges}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2 className="h5 text-left">Emails</h2>
                        {contact.emails.map((email, index) => (
                          <EmailFormGroup
                            key={index + 1}
                            email={email.email}
                            category={email.category}
                            dropData={saveChanges}
                          />
                        ))}
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Jumbotron>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });
  return <Accordion>{accordion}</Accordion>;
};

export default ContactsAccordion;
