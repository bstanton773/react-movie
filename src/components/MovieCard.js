import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <Col xs={12} sm={6} lg={4}>
                <Card className='my-3 mh-1'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster}`} className='p-3'/>
                    <Card.Body>
                        <Card.Title>{ movie.movie.endsWith('The') ? `The ${movie.movie.slice(0,-5)}` : movie.movie}</Card.Title>
                        <Card.Text>{movie.year}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">{movie.avgtotal}/100</Card.Subtitle>
                        <Button as={Link} variant="primary" to={`/movies/${movie.id}`}>More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
