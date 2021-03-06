import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import RecommendationCard from '../components/RecommendationCard';
import Trailer from '../components/Trailer';

export default function MovieDetail(props) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [providers, setProviders] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const navigate = useNavigate()
    console.log(navigate)
    useEffect(() => {
        fetch(`${props.apiBaseURL}/api/movies/${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data.movie_info);
            setProviders(data.providers);
            setRecommendations(data.recommendations);
        })
        window.scrollTo(0, 0);
    }, [id, props.apiBaseURL])
    const providerInfo = {
        9: 'Amazon Prime',
        337: 'Disney +',
        384: 'HBO Max',
        15: 'Hulu',
        8: 'Netflix',
        531: 'Paramount +',
        386: 'Peacock',
        387: 'Peacock Premium',
        37: 'Showtime',
        43: 'Starz'
    }
    const addToWatchlist = (movieId) => {
        const token = localStorage.getItem('token')

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`)
        fetch(`${props.apiBaseURL}/api/add-to-watchlist/${movieId}`, {
            method: 'POST',
            headers: myHeaders
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success'){
                    props.handleMessage(data.message, 'success')
                }
            })
    }

    const goBack = () => {
        navigate(-1)
    }

    return movie ? (
        <Card bg="dark">
            <Card.Body>
            <Button variant="primary" onClick={goBack}>Go Back</Button>
            </Card.Body>
            <Row>
                <Col md={2}>
                    <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster}`} className='my-3'/>
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{ movie.movie.endsWith('The') ? `The ${movie.movie.slice(0,-5)}` : movie.movie}</Card.Title>
                        <Card.Text>
                            {movie.plot}
                        </Card.Text>
                        <Card.Text>
                            <b>Starring:</b> {movie.actors}
                        </Card.Text>
                        <Card.Text>
                            <b>Director:</b> {movie.director}
                        </Card.Text>
                        <Card.Text>
                            <b>Genre:</b> {movie.genre}
                        </Card.Text>
                        <Card.Text>
                            <b>Release Year:</b> {movie.year}
                        </Card.Text>
                        <Card.Text>
                            <b>Runtime:</b> {movie.runtime} minutes
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} className='mb-3'>
                    {props.isAuthenticated ? (<div className="d-grid">
                    <Button variant="success" className="d-block" onClick={() => addToWatchlist(movie.id)}>Add To Watchlist</Button>
                    </div>): null}
                    
                    
                </Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:2}}>
                <Trailer videoId={movie.video_key}/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                        <Card.Title>Where To Watch</Card.Title>
                    <Card.Body>
                        <Row>
                            <Col>
                            {providers.map(provider => (
                                providerInfo[provider.provider_id] ? (
                                    <a key={provider.provider_id} href={provider.url} target='_blank' rel='noopener noreferrer'>
                                    <Button variant="outline-primary">{providerInfo[provider.provider_id]}</Button>
                                    </a>
                                ) : null
                            ))}
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Title>Similar Flicks</Card.Title>
                    <div className='d-flex overflow-auto'>
                        {recommendations.map(recommendation => <RecommendationCard key={recommendation.id} recommendation={recommendation}/>)}
                    </div>
                </Col>
            </Row>
        </Card>
    ) : null
}
