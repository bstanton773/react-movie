import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function LoggedInNav(props) {
    return (
        <>
        <Nav.Link as={Link} to='/watchlist' href='/'>My Watchlist</Nav.Link>
        <Nav.Link as={Link} to='/my-ratings' href='/'>My Ratings</Nav.Link>
        <Nav.Link as={Link} to='/following' href='/'>Following</Nav.Link>
        <Nav.Link as={Link} to='/' href='/' onClick={props.logout}>Logout</Nav.Link>
        </>
    );
}
