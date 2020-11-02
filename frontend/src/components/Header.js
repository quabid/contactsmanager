import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const Header = ({ branding }) => {
  return (
    <header>
      <Navbar bg="transparent" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to="/">
            <NavbarBrand className="font-weight-bolder">{branding}</NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/api/users/signup">
                <NavLink>
                  <i className="fas fa-users"></i> Sign Up
                </NavLink>
              </LinkContainer>

              <LinkContainer to="/api/users/login">
                <NavLink>
                  <i className="fas fa-user"></i> Sign In
                </NavLink>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
