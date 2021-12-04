import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export default class RecommendationCard extends Component {
    render() {
        const recommendation = this.props.recommendation
        return (
            <Card className='my-3 mh-1'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${recommendation.poster}`} className='p-3'/>
                <Card.Body>
                    <Card.Title>{ recommendation.movie.endsWith('The') ? `The ${recommendation.movie.slice(0,-5)}` : recommendation.movie}</Card.Title>
                    <Card.Text>{recommendation.year}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{recommendation.avgtotal}/100</Card.Subtitle>
                    <Button as={Link} variant="primary" to={`/movies/${recommendation.id}`}>More Info</Button>
                </Card.Body>
            </Card>
        )
    }
}
