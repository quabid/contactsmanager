import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import ContactsAccordion from '../components/ContactsAccordion';
import { listContacts } from '../actions/ContactsActions';
import users from '../Users';

const UsersScreen = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector((state) => state.contactsList);
  const { loading, error, contacts } = contactsList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsAccordion users={users} />
    </Container>
  );
};

export default UsersScreen;
