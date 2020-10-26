import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContactCard from '../components/ContactCard';
import { getContact } from '../actions/ContactsActions';

const ContactScreen = ({ match }) => {
  const dispatch = useDispatch();
  const contactObject = useSelector((state) => state.contactObject);
  const { loading, error, contact } = contactObject;

  useEffect(() => {
    dispatch(getContact(match.params.id));
  }, [dispatch, match]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <ContactCard contact={contact} />
  );
};

export default ContactScreen;
