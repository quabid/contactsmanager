import React, { useState, useEffect } from 'react';
import { Form, Dropdown, Row, Col, Container } from 'react-bootstrap';
import { OPTIONS } from '../constants/DropdownConstants';

const PhoneFormGroup = ({ category, phone, dropData }) => {
  const [_phone, setPhone] = useState('');
  const [_category, setCategory] = useState('');

  useEffect(() => {
    setCategory(_category || category);
    setPhone(_phone || phone);
  }, [category, phone, _category, _phone]);

  return (
    <Form.Group controlId='exampleForm.SelectCustom'>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Form.Label
              className='font-weight-bolder text-white my-2'
              style={{ fontSize: '1.2rem' }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant='outline-success'
                  size='sm'
                  id='phoneCategory'
                >
                  {_category || 'Phone Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {OPTIONS.map((option, index) => (
                    <Dropdown.Item
                      key={index + 22}
                      id={option}
                      onSelect={(e) => {
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
              className='my-2 mx-auto'
              style={{ background: 'transparent', color: '#fff' }}
              size='lg'
              as='input'
              type='phone'
              value={_phone}
              onChange={(e) => {
                console.log(`Phone number changed to: ${e.target.value}`);
                setPhone(e.target.value);
              }}
            />
          </Col>
          <Col className='my-3' xs={12} md={6}>
            <span
              onClick={() => {
                dropData({ category: _category, type: 'phone', value: _phone });
              }}
              className='btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold'
            >
              <i className='fas fa-pencil-alt fw'></i> Save
            </span>
          </Col>

          <Col className='my-3' xs={12} md={6}>
            <span className='btn btn-outline-danger d-inline-block border border-danger rounded font-weight-bold'>
              <i className='fas fa-trash-alt fw'></i> Remove
            </span>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  );
};

export default PhoneFormGroup;
