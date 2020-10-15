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
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';

function AdminHeader() {

    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
          <Navbar.Brand href="#home"><h2>EventBoard</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> </Nav>
            <Nav>
              <Nav.Link href="/admin/user">
                All Users
              </Nav.Link>
              <Nav.Link eventKey={2} href="/admin/contactus">
                User Contacted
              </Nav.Link>
              <Nav.Link eventKey={2} href="/admin/company">
                Company
              </Nav.Link>
              <Nav.Link eventKey={2} href="/admin/faqs">
                FAQS
              </Nav.Link>              
              <Nav.Link eventKey={2} href="/adminLogin">
                  Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );
 
}

export default AdminHeader;
