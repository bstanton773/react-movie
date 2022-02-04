import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export default class RecommendationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }
    };

    render() {
        const recommendation = this.props.recommendation
        return (
            <Card className='my-3' text='black' style={{minWidth: "25vw"}} onMouseEnter={() => this.setState({showInfo: true})} onMouseLeave={() => this.setState({showInfo: false})}>
                { this.state.showInfo ? 
                (
                    <>
                        <Card.Img src={`https://image.tmdb.org/t/p/original${recommendation.poster}`} style={{"opacity": "0.15"}}/> 
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column align-items-center justify-content-between'>

                                <Card.Title>{ recommendation.movie.endsWith('The') ? `The ${recommendation.movie.slice(0,-5)}` : recommendation.movie}</Card.Title>
                                <Card.Text>{recommendation.year}</Card.Text>
                                <Button variant="primary" as={Link} to={`/movies/${recommendation.id}`}>More Info</Button>
                                <Card.Subtitle>{recommendation.avgtotal}/100</Card.Subtitle>
                            </div>
                        </Card.ImgOverlay>
                    </>
                ):(
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${recommendation.poster}`}/> 
                    )}
            </Card>
        )
    }
}
