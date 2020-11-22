import React, { useState, useEffect } from 'react';
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
// import { cap, stringify, parse, log } from '../utils';
import PhoneFormGroup from '../components/PhoneFormGroup';
import EmailFormGroup from '../components/EmailFormGroup';
import NameFormGroup from '../components/NameFormGroup';
import AddressFormGroup from './AddressFormGroup';

const logger = bunyan.createLogger({
  name: 'ContactsAcccordion Component',
});

const ContactsAccordion = ({
  contacts,
  handleUpdate,
  setHasUpdates,
  hasUpdates,
}) => {
  const [updatedContacts, setUpdatedContacts] = useState(null);

  useEffect(() => {
    if (!hasUpdates) {
      setUpdatedContacts([]);
    }
  }, [setUpdatedContacts, hasUpdates]);

  const saveChanges = obj => {
    if (obj.id) {
      const existing = updatedContacts.find(x => x.id === obj.id) || null;

      if (null !== existing) {
        switch (obj.type) {
          case 'email':
            delete obj.type;
            delete obj.id;
            existing.emails.push(obj);
            break;

          case 'phone':
            delete obj.type;
            delete obj.id;
            existing.phones.push(obj);
            break;

          case 'address':
            delete obj.type;
            delete obj.id;
            existing.addresses.push(obj);
            break;

          case 'name':
            delete obj.type;
            delete obj.id;
            existing.fname = obj.fname;
            existing.lname = obj.lname;
            break;

          default:
            return;
        }
      } else {
        const updatedContact = {
          id: obj.id,
          emails: [],
          phones: [],
          addresses: [],
        };
        updatedContacts.push(updatedContact);

        switch (obj.type) {
          case 'email':
            delete obj.type;
            delete obj.id;
            updatedContact.emails.push(obj);
            break;

          case 'phone':
            delete obj.type;
            delete obj.id;
            updatedContact.phones.push(obj);
            break;

          case 'address':
            delete obj.type;
            delete obj.id;
            updatedContact.addresses.push(obj);
            break;

          case 'name':
            updatedContact.fname = obj.fname;
            updatedContact.lname = obj.lname;
            break;

          default:
            return;
        }
      }

      logger.info(`Updated Contacts: ${JSON.stringify(updatedContacts)}`);
      const updatesAvailable = updatedContacts.length > 0 ? true : false;
      setHasUpdates(updatesAvailable);
      handleUpdate(updatedContacts);
    }
  };

  const cancelChanges = id => {
    const uci = updatedContacts.findIndex(x => x.id === id);

    if (-1 !== uci) {
      updatedContacts.splice(uci);
      logger.info(
        `Removed update ID: ${id} ${JSON.stringify(updatedContacts)}`
      );
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
            className="text-white border border-white rounded"
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
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left">Name</h2>
                        <NameFormGroup
                          id={contact._id}
                          firstName={contact.fname}
                          lastName={contact.lname}
                          dropData={saveChanges}
                        />
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left">Phones</h2>
                        <h2 className="h5 text-right d-inline-block add add-phone">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.phones.map((phone, index) => (
                          <PhoneFormGroup
                            key={index + 1}
                            id={contact._id}
                            phone={phone.phone}
                            category={phone.category}
                            dropData={saveChanges}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left">Emails</h2>
                        <h2 className="h5 text-right d-inline-block add add-email">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.emails.map((email, index) => (
                          <EmailFormGroup
                            key={index + 1}
                            id={contact._id}
                            email={email.email}
                            category={email.category}
                            dropData={saveChanges}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left">Addresses</h2>
                        <h2 className="h5 text-right d-inline-block add add-address">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.addresses.map((address, index) => (
                          <AddressFormGroup
                            key={index + 1}
                            id={contact._id}
                            address={address.address}
                            category={address.category}
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
