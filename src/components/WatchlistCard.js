import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default class WatchlistCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <Col xs={4} md={2}>
                <Card className='mt-3'>
                    <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster}`} variant="top" />
                    <Button className='d-block' style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}} variant="danger" onClick={() => this.props.removeFromWatchlist(movie.id)}>Remove</Button>
                </Card>
            </Col>
        )
    }
}