import React, { useState, useEffect } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { OPTIONS } from '../constants/DropdownConstants';

const PhoneFormGroup = ({ category, phone }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setSelectedItem(selectedItem || category);
  });

  return (
    <Form.Group controlId='exampleForm.SelectCustom'>
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
            {selectedItem || 'Phone Category'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {OPTIONS.map((option, index) => (
              <Dropdown.Item
                key={index + 22}
                id={option}
                onSelect={(e) => {
                  setSelectedItem(e.split('#')[1]);
                }}
                href={'#' + option}
                active={
                  option.toLowerCase() === category.toLowerCase() ? true : false
                }
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Label>
      <Form.Control
        className='my-2 mx-auto'
        style={{ background: 'transparent', color: '#fff' }}
        as='input'
        type='text'
        value={phone}
        onChange={(e) => {
          console.log(`${e.target.value}  changed`);
          setPhone(e.target.value);
        }}
      />
    </Form.Group>
  );
};

export default PhoneFormGroup;
