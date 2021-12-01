import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import MovieCard from '../components/MovieCard';

export default class Home extends Component {
    render() {
        return (
            <div>
                This is the Home View.
                <Row>
                {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </Row>
            </div>
        )
    }
}
