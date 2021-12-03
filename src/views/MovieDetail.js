import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard';

export default function MovieDetail(props) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [providers, setProviders] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {
        fetch(`/api/movies/${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data.movie_info);
            setProviders(data.providers);
            setRecommendations(data.recommendations);
        })
    }, [id])
    console.log(movie)
    return movie ? (
        <Card >
            <Row>
                <Col md={2}>
                    <Card.Img src={`https://image.tmdb.org/t/p/original${movie.poster}`} className='my-3 ms-3'/>
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
                <Col md={2}>
                    
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card.Body>
                        <Card.Title>Providers</Card.Title>
                        <Card.Text>
                            {providers.map(provider => (
                                <Button key={provider.id} variant="outline-primary" href={provider.url}>{provider.movie}</Button>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row>
                {recommendations.map(recommendation => (

                    <MovieCard key={recommendation.id} movie={recommendation} />
                ))}
            </Row>
        </Card>
    ) : null
}
