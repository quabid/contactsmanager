import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactsAccordion from '../components/ContactsAccordion';
import { listContacts, updateContact } from '../actions/ContactsActions';

const ContactsScreen = () => {
  const [hasChanges, setHasChanges] = useState(false);

  const dispatch = useDispatch();

  // @ts-ignore
  const contactsList = useSelector(state => state.contactsList);
  const { loading, error, contacts } = contactsList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  const handleContactsUpdate = contacts => {
    hasChanges
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
        <Col xs={12}>
          <Row>
            <Col className="my-4" xs={6}>
              <Button
                disabled={hasChanges ? false : true}
                variant="outline-primary"
              >
                Save Changes
              </Button>
            </Col>

            <Col className="my-4" xs={6}>
              <Button
                onClick={() => setHasChanges(false)}
                disabled={hasChanges ? false : true}
                variant="outline-success"
              >
                Cancel Changes
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="v-scroll" style={{ height: '77vh' }} xs={12}>
          <ContactsAccordion
            handleUpdate={handleContactsUpdate}
            contacts={contacts}
            setHasChanges={setHasChanges}
            hasChanges={hasChanges}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactsScreen;
