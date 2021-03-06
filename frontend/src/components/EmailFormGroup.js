import React, { useState, useEffect } from 'react';
import { Form, Dropdown, Row, Col, Container } from 'react-bootstrap';
import { OPTIONS } from '../constants/DropdownConstants';

const EmailFormGroup = ({
  id,
  category,
  email,
  modifyProperty,
  removeProperty,
}) => {
  const [_email, setEmail] = useState('');
  const [_category, setCategory] = useState('');
  const [bu_email, setBuEmail] = useState('');
  const [bu_category, setBuCategory] = useState('');
  const [changeOccured, setChangeOccured] = useState(false);
  const [changes, setChanges] = useState(null);

  useEffect(() => {
    setCategory(_category || category);
    setEmail(_email || email);
    setBuCategory(category);
    setBuEmail(email);
  }, [category, email, _category, _email]);

  const resetEmail = () => {
    setCategory(bu_category);
    setEmail(bu_email);
    setChangeOccured(false);
    setChanges(null);
  };

  const saveProperty = () => {
    setChanges({
      action: 'update',
      id: id,
      category: _category,
      type: 'email',
      email: _email,
    });
  };

  const deleteProperty = () => {
    resetEmail();

    setChanges({
      action: 'remove',
      id: id,
      category: _category,
      type: 'email',
      email: _email,
    });
  };

  const onChangeHandler = e =>
    setEmail(
      e.target.value.trim() !== _email.trim() ? e.target.value.trim() : bu_email
    );

  const onKeyupHandler = () =>
    setChangeOccured(_email.trim() !== bu_email.trim() ? true : false);

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
                  id="emailCategory"
                >
                  {_category || 'Email Category'}
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
              type="email"
              value={_email}
              onChange={onChangeHandler}
              onKeyUp={onKeyupHandler}
            />
          </Col>

          {changeOccured ? (
            <Col className="my-3" xs={12} md={3}>
              <span
                onClick={saveProperty}
                className="btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold"
              >
                <i className="fas fa-pencil-alt fw"></i> Save
              </span>
            </Col>
          ) : null}

          {changes ? (
            <>
              <Col className="my-3" xs={12} md={3}>
                <span
                  onClick={() => {
                    changes && changes.action === 'update'
                      ? modifyProperty(changes)
                      : removeProperty(changes);
                  }}
                  className="btn btn-outline-success d-inline-block border border-success rounded font-weight-bold"
                >
                  <i className="fas fa-go fw"></i> Apply
                </span>
              </Col>

              <Col className="my-3" xs={12} md={3}>
                <span
                  onClick={resetEmail}
                  className="btn btn-outline-success d-inline-block border border-success rounded font-weight-bold"
                >
                  <i className="fas fa-stop fw"></i> Cancel
                </span>
              </Col>
            </>
          ) : null}

          <Col className="my-3" xs={12} md={3}>
            <span
              onClick={deleteProperty}
              className="btn btn-outline-danger d-inline-block border border-danger rounded font-weight-bold"
            >
              <i className="fas fa-trash-alt fw"></i> Remove
            </span>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  );
};

export default EmailFormGroup;
