import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContactsAccordion from '../components/ContactsAccordion';
import { listContacts } from '../actions/ContactsActions';

const ContactsScreen = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector((state) => state.contactsList);
  const { loading, error, contacts } = contactsList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <ContactsAccordion contacts={[...contacts]} />
  );
};

export default ContactsScreen;
