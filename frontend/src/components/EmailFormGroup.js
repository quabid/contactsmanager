import React from 'react';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
// import { OPTIONS } from '../constants/DropdownConstants';

const EmailFormGroup = ({ category, phone }) => {
  return (
    <Form.Group controlId='phone'>
      <Form.Label
        className='font-weight-bolder text-white mb-0'
        style={{ fontSize: '1.2rem' }}
      >
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle
                variant='outline-success'
                size='sm'
                id='emailCategory'
              >
                Email Category
              </Dropdown.Toggle>

              <Dropdown.Menu>{}</Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Form.Label>
    </Form.Group>
  );
};

export default EmailFormGroup;
