import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const NameFormGroup = ({ id, firstName, lastName, dropData }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  useEffect(() => {
    setFname(firstName);
    setLname(lastName);
  }, [firstName, lastName]);

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <Form.Control
            className="my-2 mx-auto"
            style={{ background: 'transparent', color: '#fff' }}
            size="lg"
            as="input"
            type="phone"
            value={fname}
            onChange={e => {
              console.log(`First name changed to: ${e.target.value}`);
              setFname(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Control
            className="my-2 mx-auto"
            style={{ background: 'transparent', color: '#fff' }}
            size="lg"
            as="input"
            type="phone"
            value={lname}
            onChange={e => {
              // console.log(`Last name changed to: ${e.target.value}`);
              setLname(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="my-3" xs={12} md={6}>
          <span
            onClick={() => {
              dropData({
                id: id,
                type: 'name',
                fname: fname,
                lname: lname,
              });
            }}
            className="btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold"
          >
            <i className="fas fa-pencil-alt fw"></i> Save
          </span>
        </Col>
      </Row>
    </>
  );
};

export default NameFormGroup;
