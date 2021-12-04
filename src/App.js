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
            maxYear: thisYear,
            currentPage: 1
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
        if (prevState.search !== this.state.search || prevState.selectedProviders !== this.state.selectedProviders || prevState.selectedGenres !== this.state.selectedGenres || prevState.minYear !== this.state.minYear || prevState.maxYear !== this.state.maxYear || prevState.currentPage !== this.state.currentPage) {
            const search = this.state.search;
            const selectedProviders = this.state.selectedProviders.join(', ');
            const selectedGenres = this.state.selectedGenres.join(', ');
            const minYear = this.state.minYear;
            const maxYear = this.state.maxYear;
            const currentPage = this.state.currentPage;
            fetch(`/api/movies?search=${search}&providers=${selectedProviders}&genres=${selectedGenres}&minYear=${minYear}&maxYear=${maxYear}&page=${currentPage}`)
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
        this.setState({ search, currentPage: 1 });
    }

    handleProviderChange = (e) => {
        const selectedProvider = e.target.id.replace('+', '%2B');
        const checkBoxValue = e.target.checked;
        if (checkBoxValue) {
            this.setState({ selectedProviders: [...this.state.selectedProviders, selectedProvider], currentPage: 1 });
        } else {
            const selectedProviders = this.state.selectedProviders.filter(provider => provider !== selectedProvider);
            this.setState({ selectedProviders, currentPage: 1 });
        }
    }

    handleGenreChange = (e) => {
        const selectedGenre = e.target.id;
        const checkBoxValue = e.target.checked;
        if (checkBoxValue) {
            this.setState({ selectedGenres: [...this.state.selectedGenres, selectedGenre], currentPage: 1 });
        } else {
            const selectedGenres = this.state.selectedGenres.filter(provider => provider !== selectedGenre);
            this.setState({ selectedGenres, currentPage: 1 });
        }
    }

    handleYearChange = (e) => {
        const minYear = e[0];
        const maxYear = e[1];
        this.setState({ minYear, maxYear, currentPage: 1 });
    }

    handleFilter = (displayFilters) => {
        this.setState({ displayFilters });
    }

    handlePageChange = (currentPage) => {
        this.setState({ currentPage });
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
                currentPage={this.state.currentPage}
                handleSearch={this.handleSearch}
                handleProviderChange={this.handleProviderChange}
                handleGenreChange={this.handleGenreChange}
                handleYearChange={this.handleYearChange}
                handleFilter={this.handleFilter}
                handlePageChange={this.handlePageChange}
                />
            } />
            <Route exact path="/movies/:id" element={<MovieDetail />} />
            </Routes>
        </Container>
        </div>
        )
    }
}
