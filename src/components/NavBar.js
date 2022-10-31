import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Nav1() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg' variant="dark">
      <Container>
        <Navbar.Brand href="#home">Project Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="home" as={Link} to={"/"}>Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to ={"/cohorts"}>Cohorts</Nav.Link>
          <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
          <Nav.Link as={Link} to ={"/aboutus"}>About Us</Nav.Link>
          <Nav.Link as={Link} to ={"/logout"}>LogOut </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;