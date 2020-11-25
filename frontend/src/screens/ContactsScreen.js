import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactsAccordion from '../components/ContactsAccordion';
import { listContacts, updateContact } from '../actions/ContactsActions';

const ContactsScreen = () => {
  const [updates, setUpdates] = useState(false);

  const dispatch = useDispatch();

  // @ts-ignore
  const contactsList = useSelector(state => state.contactsList);
  const { loading, error, contacts } = contactsList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  const handleContactsUpdate = contacts => {
    updates
      ? console.log(`Updating contacts:  ${JSON.stringify(contacts)}`)
      : console.log(`\n\n\t\t\n\n`);
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container fluid>
      <Row>
        {contacts.length > 0 ? (
          <Col xs={12}>
            <Row>
              <Col className="my-4" xs={6}>
                <Button
                  disabled={updates ? false : true}
                  variant="outline-primary"
                >
                  Save Changes
                </Button>
              </Col>

              <Col className="my-4" xs={6}>
                <Button
                  onClick={() => setUpdates(false)}
                  disabled={updates ? false : true}
                  variant="outline-success"
                >
                  Cancel Changes
                </Button>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col xs={12}>
            <h3 className="lead font-weight-bolder">
              <Link to="/newcontact">Click here to add a contact.</Link>
            </h3>
          </Col>
        )}
        <Col className="v-scroll" style={{ height: '77vh' }} xs={12}>
          <ContactsAccordion
            handleUpdate={handleContactsUpdate}
            contacts={contacts}
            setHasUpdates={setUpdates}
            hasUpdates={updates}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactsScreen;
