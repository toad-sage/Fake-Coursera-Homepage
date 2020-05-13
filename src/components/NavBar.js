import React from 'react';
import { Nav, Navbar, Form, FormControl,Button,DropdownButton,Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/download.svg';

const Styles = styled.div`
  .navbar { background-color: #fff; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #2a73cc;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
        <Navbar.Brand>
            <img src={logo} alt="logo"  href="/" style={{cursor:"pointer"}}/>
            <DropdownButton id="dropdown-basic-button" title="Explore" style={{marginLeft: "5%",display:"inline"}}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Form className="form-center" style={{marginLeft: "5%"}}>
            <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">For Enterprise</Nav.Link></Nav.Item> 
            <Nav.Item><Button variant="primary">Join For Free</Button></Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)