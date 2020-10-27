import React from 'react';
import { InputGroup, FormControl, FormGroup, Row, Form } from 'react-bootstrap';

const FormGroupItem = ({ handleChange, fa, type, value }) => {
  return (
    <FormGroup
      className='border border-secondary rounded p-3'
      as={Row}
      controlId='formPlaintextEmail'
    >
      <Form.Label
        className='font-weight-bolder text-secondary'
        style={{ fontSize: '1.3rem' }}
      >
        {type.toLowerCase() !== 'first name' &&
        type.toLowerCase() !== 'last name' ? (
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label
              className='font-weight-bolder text-secondary'
              style={{ fontSize: '1.3rem' }}
            >
              {type}
            </Form.Label>
            <Form.Control as='select' custom>
              <option>home</option>
              <option>work</option>
              <option>personal</option>
              <option>business</option>
              <option>other</option>
            </Form.Control>
          </Form.Group>
        ) : (
          type
        )}
      </Form.Label>

      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>
            <i className={'fas fa-' + fa + ' fw fa-2x'}></i>
          </InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          onChange={handleChange}
          className='form-control-lg'
          placeholder={type}
          aria-label={type}
          aria-describedby='basic-addon1'
          value={value}
        />
      </InputGroup>
    </FormGroup>
  );
};

export default FormGroupItem;
