import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactsAccordion from '../components/ContactsAccordion';
import { listContacts, updateContact } from '../actions/ContactsActions';

const ContactsScreen = () => {
  const dispatch = useDispatch();

  // @ts-ignore
  const contactsList = useSelector(state => state.contactsList);
  const { loading, error, contacts } = contactsList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  const handleContactUpdate = contact => {
    console.log(
      `Updating contact ID: ${contact.id} to ${JSON.stringify(contact)}`
    );
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container fluid>
      <Row>
        <Col className="my-4" xs={12}>
          <Button variant="outline-primary">Save Changes</Button>
        </Col>
        <Col className="v-scroll" style={{ height: '75vh' }} xs={12}>
          <ContactsAccordion
            handleUpdate={handleContactUpdate}
            contacts={contacts}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactsScreen;
