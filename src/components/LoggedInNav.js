import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function LoggedInNav(props) {
    return (
        <NavDropdown title="My Account" id="basic-nav-dropdown-end" align="end">
            <NavDropdown.Item as={Link} to="/watchlist">Watchlist</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Ratings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Following</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/" onClick={props.logout}>Logout</NavDropdown.Item>
        </NavDropdown>
    );
}
