import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
// import movies from './movies';
import MovieDetail from './views/MovieDetail';


export default class App extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let thisYear = today.getFullYear();
        this.state = {
            movies: [],
            search: '',
            displayFilters: false,
            providers: ['Amazon Prime', 'Disney+', 'HBO Max', 'Hulu', 'Netflix', 'Paramount+', 'Peacock', 'Peacock Premium', 'Showtime', 'Starz'],
            selectedProviders: [],
            genres: ['Action', 'Adventure', 'Animation', 'Anime', 'Comedy', 'Comic', 'Crime', 'Disaster', 'Drama', 'Dramedy', 'Fantasy', 'Horror', 'Musical', 'Mystery', 'RomCom', 'Romance', 'Sci-Fi', 'Sports', 'Thriller', 'Western'],
            selectedGenres: [],
            minYear: 1900,
            maxYear: thisYear
        };
    }

    componentDidMount() {
        fetch('/api/movies')
        .then(res => res.json())
        .then(movies => {
            this.setState({ movies });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search || prevState.selectedProviders !== this.state.selectedProviders || prevState.selectedGenres !== this.state.selectedGenres || prevState.minYear !== this.state.minYear || prevState.maxYear !== this.state.maxYear) {
            const search = this.state.search;
            const selectedProviders = this.state.selectedProviders.join(', ');
            const selectedGenres = this.state.selectedGenres.join(', ');
            const minYear = this.state.minYear;
            const maxYear = this.state.maxYear;
            fetch(`/api/movies?search=${search}&providers=${selectedProviders}&genres=${selectedGenres}&minYear=${minYear}&maxYear=${maxYear}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data });
            });
        }
    }

    handleSearch = (e) => {
        const search = e.target.value;
        fetch(`/api/movies?search=${search}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ movies: data });
        });
        this.setState({ search });
    }

    handleProviderChange = (e) => {
        const selectedProvider = e.target.id.replace('+', '%2B');
        const checkBoxValue = e.target.checked;
        if (checkBoxValue) {
            this.setState({ selectedProviders: [...this.state.selectedProviders, selectedProvider] });
        } else {
            const selectedProviders = this.state.selectedProviders.filter(provider => provider !== selectedProvider);
            this.setState({ selectedProviders });
        }
    }

    handleGenreChange = (e) => {
        const selectedGenre = e.target.id;
        const checkBoxValue = e.target.checked;
        if (checkBoxValue) {
            this.setState({ selectedGenres: [...this.state.selectedGenres, selectedGenre] });
        } else {
            const selectedGenres = this.state.selectedGenres.filter(provider => provider !== selectedGenre);
            this.setState({ selectedGenres });
        }
    }

    handleYearChange = (e) => {
        const minYear = e[0];
        const maxYear = e[1];
        this.setState({ minYear, maxYear });
    }

    handleFilter = (displayFilters) => {
        this.setState({ displayFilters });
    }

    render() {
        return (
        <div className='bg-dark'>
        <Navigation />
        <Container>
            <Routes>
            <Route exact path="/" element={
            <Home 
                movies={this.state.movies}
                search={this.state.search}
                displayFilters={this.state.displayFilters}
                providers={this.state.providers}
                selectedProviders={this.state.selectedProviders}
                genres={this.state.genres}
                selectedGenres={this.state.selectedGenres}
                minYear={this.state.minYear}
                maxYear={this.state.maxYear}
                handleSearch={this.handleSearch}
                handleProviderChange={this.handleProviderChange}
                handleGenreChange={this.handleGenreChange}
                handleYearChange={this.handleYearChange}
                handleFilter={this.handleFilter}
                />
            } />
            <Route exact path="/movies/:id" element={<MovieDetail />} />
            </Routes>
        </Container>
        </div>
        )
    }
}
