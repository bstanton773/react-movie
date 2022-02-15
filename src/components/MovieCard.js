import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <Col xs={4} md={2}>
                <Card className='mt-3'>
                    <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster}`} variant="top" />
                    <Button className='d-block' style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}} as={Link} variant="primary" to={`/movies/${movie.id}`}>More Info</Button>
                </Card>
            </Col>
        )
    }
}
