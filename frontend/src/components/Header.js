import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown}  from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <LinkContainer  to='/'>
  <Navbar.Brand >The urban-cartoon</Navbar.Brand>
    </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
        <LinkContainer to='/cart'>
      <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
      <Nav.Link eventKey={2} ><i className="fas fa-user"></i>
        Sign in
      </Nav.Link>
        </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header