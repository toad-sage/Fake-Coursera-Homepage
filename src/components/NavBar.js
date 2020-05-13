import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl,Button,NavDropdown } from 'react-bootstrap';
import logo from '../images/download.svg';
import  AuthModal from './AuthModal';


export const NavigationBar = () => {

  const [modalShow,setModalShow] = useState(false);
  
  return (
  <React.Fragment>
  <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
    <Navbar.Brand href="#home">
      <img src={logo} alt={logo} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Explore" id="collasible-nav-dropdown" style={{color:"#fff"}}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Nav>
        <Nav.Link>For Enterprise</Nav.Link>
        <Nav.Link href="#deets"><Button variant="primary" onClick={() => setModalShow(true)}>Join For free</Button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <AuthModal
    show={modalShow}
    onHide={() => setModalShow(false)} />
  </React.Fragment>
)
}