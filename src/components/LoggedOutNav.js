import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function LoggedInNav() {
    return (
        <>
        <Nav.Link as={Link} to='/register' href='/'>Register</Nav.Link>
        <Nav.Link as={Link} to='/login' href='/'>Login</Nav.Link>
        </>
    );
}
