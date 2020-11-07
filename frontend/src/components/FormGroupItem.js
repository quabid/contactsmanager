import React from 'react';
import { Form } from 'react-bootstrap';

const FormGroupItem = ({
  controlId,
  label,
  type,
  placeholder = 'placeholder',
  controlValue,
  handleChange,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label style={{ background: 'transparent', color: '#fff' }}>
        {label}
      </Form.Label>
      <Form.Control
        style={{ background: 'transparent' }}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        value={controlValue}
        className="text-white"
      />
    </Form.Group>
  );
};

export default FormGroupItem;
