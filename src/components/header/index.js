import React from "react";
import reactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';

function Header() {

    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
          <Navbar.Brand href="#home"><h2>EventBoard</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
             
            </Nav>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="/aboutUs">
                About
              </Nav.Link>
              <Nav.Link eventKey={2} href="/faqs">
                FAQs
              </Nav.Link>
              <Nav.Link eventKey={2} href="/contactus">
                Contact Us
              </Nav.Link>
              <Nav.Link eventKey={2} href="/createEvent">
              Create Event
              </Nav.Link>
              <Nav.Link eventKey={2} href="/logout">
              Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );
 
}

export default Header;
