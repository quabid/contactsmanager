import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormGroupItem from '../components/FormGroupItem';
import { cap } from '../utils/Capper';
import { getContact } from '../actions/ContactsActions';

const ContactCard = ({ id }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [image, setImage] = useState('');
  const [emails, setEmails] = useState(null);
  const [phones, setPhones] = useState(null);
  const [addresses, setAddresses] = useState(null);

  // @ts-ignore
  const contactObject = useSelector(state => state.contactObject);
  const { loading, error, contact } = contactObject;
  const _emails = [];
  const _phones = [];
  const _addresses = [];

  const addEmail = (category, email) => {
    _emails.push({ category, email });
  };

  const addPhone = (category, phone) => {
    _phones.push({ category, phone });
  };

  const addAddress = (category, city, street, zipcode) => {
    _addresses.push({ category, city, street, zipcode });
  };

  const handleOnChange = e => {
    console.log(`Item changed to ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getContact(id));
    setTimeout(() => {
      setFirstName(contact.fname);
      setLastName(contact.lname);
      setNickName(contact.nname || '');
      setImage(contact.image || '');
      contact.emails &&
        contact.emails.map((email, index) => {
          _emails.push({ ...email });
        });
      setEmails(_emails);

      contact.phones &&
        contact.phones.map((phone, index) => {
          _phones.push({ ...phone });
        });
      setPhones(_phones);

      contact.addresses &&
        contact.addresses.map((address, index) => {
          _addresses.push({ ...address });
        });
      setAddresses(_addresses);
    }, 555);
  }, [dispatch, id]);

  const graphic = () => {
    return image ? (
      <Col xs={12}>
        <Card.Img src={image} alt={contact.email} />
      </Col>
    ) : (
      <Col xs={12}>
        <i className="fas fa-user fw fa-8x"></i>
      </Col>
    );
  };

  const listEmails = () => {
    return emails
      ? emails.map(email => {
          return (
            <Form.Group>
              <h3 className="h3 text-center">Emails</h3>
              <Form.Label
                className="font-weight-bolder"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '1.5rem',
                }}
              >
                {cap(email.category)}
              </Form.Label>
              <Form.Control
                type="email"
                value={email.email}
                style={{ background: 'transparent' }}
                className="text-white"
                onChange={handleOnChange}
              />
            </Form.Group>
          );
        })
      : null;
  };

  const listPhones = () => {
    return phones
      ? phones.map(phone => {
          return (
            <Form.Group>
              <h3 className="h3 text-center">Phones</h3>
              <Form.Label
                className="font-weight-bolder"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '1.5rem',
                }}
              >
                {cap(phone.category)}
              </Form.Label>
              <Form.Control
                type="phone"
                value={phone.phone}
                style={{ background: 'transparent' }}
                className="text-white"
                onChange={handleOnChange}
              />
            </Form.Group>
          );
        })
      : null;
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : contact ? (
    <div>
      <Link className="text-white font-weight-bolder my-4 p-3" to="/contacts">
        Go Back
      </Link>
      <Form style={{ background: 'transparent' }}>
        <Row>
          <Col xs={12} md={3}>
            <Row className="text-center">
              <Col xs={12}>
                <h3 className="text-center font-weight-bolder">
                  {cap(firstName) + ' ' + cap(lastName)}
                </h3>
              </Col>
              {graphic()}
            </Row>
          </Col>

          <Col xs={12} md={9}>
            <Form>
              {listEmails()}
              {listPhones()}
            </Form>
          </Col>
        </Row>
      </Form>
    </div>
  ) : null;
};

export default ContactCard;
