import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ branding }) => {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        {branding ? (
          <span className='font-weight-bolder text-secondary'>{branding}</span>
        ) : (
          <span className='font-weight-bolder text-secondary'>My Contacts</span>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto font-weight-bold'>
          <Nav.Link href='/auth/signin'>Sign In</Nav.Link>
          <Nav.Link href='#link'>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
