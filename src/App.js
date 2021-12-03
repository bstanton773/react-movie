import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import movies from './movies';
import MovieDetail from './views/MovieDetail';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
  }

  render() {
    return (
      <>
      <Navigation />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home movies={this.state.movies}/>} />
          <Route exact path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </Container>
      </>
    )
  }
}
