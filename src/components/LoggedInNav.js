import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function LoggedInNav(props) {
    return (
        <>
        <Nav.Link as={Link} to='/watchlist'>My Watchlist</Nav.Link>
        <Nav.Link as={Link} to='/my-ratings'>My Ratings</Nav.Link>
        <Nav.Link as={Link} to='/following'>Following</Nav.Link>
        <Nav.Link as={Link} to='/' onClick={props.logout}>Logout</Nav.Link>   
        </>
    );
}
