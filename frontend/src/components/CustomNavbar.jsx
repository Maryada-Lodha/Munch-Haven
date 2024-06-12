import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export default function CustomNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="fs-1 fst-italic">Munch Haven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {localStorage.getItem("authToken") ? (
              <Nav className="ms-auto">
              <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/my-cart">My Cart</Link>
                <Link className="btn" to="/my-orders">My Orders</Link>
                <button className="btn" onClick={handleLogout}>Logout</button>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/login">Login</Link>
                <Link className="btn" to="/signup">Signup</Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
