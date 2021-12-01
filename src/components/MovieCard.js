import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default class MovieCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <Col xs={12} sm={6} md={4} xxl={3}>
                <Card className='my-3 mh-1'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster}`} className='p-3'/>
                    <Card.Body>
                        <Card.Title>{movie.movie}</Card.Title>
                        <Card.Text>{movie.year}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
