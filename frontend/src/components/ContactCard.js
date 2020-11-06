import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { cap } from '../utils/Capper';
import { getContact } from '../actions/ContactsActions';

const ContactCard = ({ id }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState([]);
  const [phone, setPhones] = useState([]);
  const [address, setAddress] = useState([]);

  // @ts-ignore
  const contactObject = useSelector(state => state.contactObject);
  const { loading, error, contact } = contactObject;
  const emails = [];
  const phones = [];
  const addresses = [];

  const addEmail = (category, email) => {
    emails.push({ category, email });
  };

  const addPhone = (category, phone) => {
    phones.push({ category, phone });
  };

  const addAddress = (category, city, street, zipcode) => {
    addresses.push({ category, city, street, zipcode });
  };

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Card style={{ background: 'transparent' }}>
      <span
        className="font-weight-bolder text-white mx-3 my-3"
        style={{ fontSize: '1.1rem' }}
      >
        <Link to="/contacts">Go Back</Link>
      </span>
      <Card.Header></Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
};

export default ContactCard;
