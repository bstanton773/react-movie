import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg" className='px-3' fixed='top'>
                <Navbar.Brand as={Link} to='/'>My Movie List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="My Account" id="basic-nav-dropdown-end" align="end">
                            <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
