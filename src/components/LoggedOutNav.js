import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function LoggedInNav() {
    return (
        <>
        <Nav.Link as={Link} to='/register'>Sign Up</Nav.Link>
        <Nav.Link as={Link} to='/login'>Sign In</Nav.Link>
        </>
    );
}
