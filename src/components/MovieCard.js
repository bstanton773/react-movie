import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <Col xs={6} md={4} xl={2}>
                <Card className='mt-3'>
                    <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster}`} />
                    {/* <Card.Body className='pb-0'>
                        <Card.Title>{ movie.movie.endsWith('The') ? `The ${movie.movie.slice(0,-5)}` : movie.movie}</Card.Title>
                        <Card.Text>{movie.year}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">{movie.avgtotal}/100</Card.Subtitle>
                    </Card.Body> */}
                </Card>
                <Button className='d-block' as={Link} variant="primary" to={`/movies/${movie.id}`}>More Info</Button>
            </Col>
        )
    }
}
