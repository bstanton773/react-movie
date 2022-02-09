import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg" className='px-3' fixed='top'>
                <a className="navbar-brand" href="/">
                    My Movie List
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {this.props.isAuthenticated ? <LoggedInNav logout={this.props.logout} /> : <LoggedOutNav /> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
