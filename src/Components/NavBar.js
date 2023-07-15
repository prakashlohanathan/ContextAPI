import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './Cart.context';

function NavBar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Mobile Phones</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/ProductDetails">
            Products
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Button variant="light">
            Cart {cartItemCount === 0 ? '0' : cartItemCount}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
