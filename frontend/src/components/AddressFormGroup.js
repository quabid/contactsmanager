import React, { useState, useEffect } from 'react';
import { Form, Dropdown, Row, Col, Container } from 'react-bootstrap';
import { OPTIONS } from '../constants/DropdownConstants';

const AddressFormGroup = ({ id, category, address, dropData }) => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [_category, setCategory] = useState('');
  const [bu_street, setBuStreet] = useState('');
  const [bu_city, setBuCity] = useState('');
  const [bu_zipcode, setBuZipcode] = useState('');
  // const [bu_category, setBuCategory] = useState('');
  const [streetChangeOccured, setStreetChangeOccured] = useState(false);
  const [cityChangeOccured, setCityChangeOccured] = useState(false);
  const [zipcodeChangeOccured, setZipcodeChangeOccured] = useState(false);

  useEffect(() => {
    setCategory(_category || category);
    setStreet(street || address.street);
    setCity(city || address.city);
    setZipcode(zipcode || address.zipcode);
    // setBuCategory(category);
    setBuStreet(address.street);
    setBuCity(address.city);
    setBuZipcode(address.zipcode);
  }, [
    category,
    address.street,
    _category,
    address.city,
    address.zipcode,
    street,
    city,
    zipcode,
  ]);

  const resetStreet = () => {
    setStreet(bu_street);
    setStreetChangeOccured(false);
  };

  const resetCity = () => {
    setCity(bu_city);
    setCityChangeOccured(false);
  };

  const resetZipcode = () => {
    setZipcode(bu_zipcode);
    setZipcodeChangeOccured(false);
  };

  const onStreetChangeHandler = e => setStreet(e.target.value);

  const onCityChangeHandler = e => setCity(e.target.value);

  const onZipcodeChangeHandler = e => setZipcode(e.target.value);

  const onStreetKeyup = () =>
    setStreetChangeOccured(street !== bu_street ? true : false);

  const onCityKeyup = () =>
    setCityChangeOccured(city !== bu_city ? true : false);

  const onZipcodeKeyup = () =>
    setZipcodeChangeOccured(zipcode !== bu_zipcode ? true : false);

  return (
    <Form.Group controlId="exampleForm.SelectCustom">
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Form.Label
              className="font-weight-bolder text-white my-2"
              style={{ fontSize: '1.2rem' }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-success"
                  size="sm"
                  id="addressCategory"
                >
                  {_category || 'Address Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {OPTIONS.map((option, index) => (
                    <Dropdown.Item
                      key={index + 22}
                      id={option}
                      onSelect={e => {
                        const selectedItem = e.split('#')[1];
                        console.log(
                          `Selected item changed to: ${selectedItem}`
                        );
                        setCategory(selectedItem);
                      }}
                      href={'#' + option}
                      active={
                        option.toLowerCase() === _category.toLowerCase()
                          ? true
                          : false
                      }
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Label>
          </Col>

          <Col xs={12}>
            <Form.Control
              className="my-2 mx-auto"
              style={{ background: 'transparent', color: '#fff' }}
              size="lg"
              as="input"
              type="text"
              value={street}
              onChange={onStreetChangeHandler}
              onKeyUp={onStreetKeyup}
            />

            {streetChangeOccured ? (
              <Col className="my-3" xs={12} md={3}>
                <span
                  onClick={resetStreet}
                  className="btn btn-outline-success d-inline-block border border-success rounded font-weight-bold"
                >
                  <i className="fas fa-stop fw"></i> Cancel
                </span>
              </Col>
            ) : null}
          </Col>

          <Col xs={12}>
            <Form.Control
              className="my-2 mx-auto"
              style={{ background: 'transparent', color: '#fff' }}
              size="lg"
              as="input"
              type="text"
              value={city}
              onChange={onCityChangeHandler}
              onKeyUp={onCityKeyup}
            />

            {cityChangeOccured ? (
              <Col className="my-3" xs={12} md={3}>
                <span
                  onClick={resetCity}
                  className="btn btn-outline-success d-inline-block border border-success rounded font-weight-bold"
                >
                  <i className="fas fa-stop fw"></i> Cancel
                </span>
              </Col>
            ) : null}
          </Col>

          <Col xs={12}>
            <Form.Control
              className="my-2 mx-auto"
              style={{ background: 'transparent', color: '#fff' }}
              size="lg"
              as="input"
              type="zipcode"
              value={zipcode}
              onChange={onZipcodeChangeHandler}
              onKeyUp={onZipcodeKeyup}
            />

            {zipcodeChangeOccured ? (
              <Col className="my-3" xs={12} md={3}>
                <span
                  onClick={resetZipcode}
                  className="btn btn-outline-success d-inline-block border border-success rounded font-weight-bold"
                >
                  <i className="fas fa-stop fw"></i> Cancel
                </span>
              </Col>
            ) : null}
          </Col>

          <Col className="my-3" xs={12} md={6}>
            <span
              onClick={() => {
                dropData({
                  id: id,
                  category: _category,
                  type: 'address',
                  address: { street, city, zipcode },
                });
              }}
              className="btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold"
            >
              <i className="fas fa-pencil-alt fw"></i> Save
            </span>
          </Col>

          <Col className="my-3" xs={12} md={6}>
            <span className="btn btn-outline-danger d-inline-block border border-danger rounded font-weight-bold">
              <i className="fas fa-trash-alt fw"></i> Remove
            </span>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  );
};

export default AddressFormGroup;
