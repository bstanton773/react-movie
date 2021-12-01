import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test';
import movies from './movies';


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
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Container>
      </>
    )
  }
}
