import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Filters from '../components/Filters';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: '',
            displayFilters: false,
            providers: ['Amazon Prime', 'Disney+', 'HBO Max', 'Hulu', 'Netflix', 'Paramount+', 'Peacock', 'Peacock Premium', 'Showtime', 'Starz'],
            selectedProviders: [],
            genres: ['Action', 'Adventure', 'Animation', 'Anime', 'Comedy', 'Comic', 'Crime', 'Disaster', 'Drama', 'Dramedy', 'Fantasy', 'Horror', 'Musical', 'Mystery', 'RomCom', 'Romance', 'Sci-Fi', 'Sports', 'Thriller', 'Western'],
            selectedGenres: [],
            minYear: 1960,
            maxYear: 2021
        };
    }

    componentDidMount() {
        fetch('/api/movies')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ movies: data });
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
                console.log(data);
                this.setState({ movies: data });
            });
        }
    }

    handleSearch = (e) => {
        const search = e.target.value;
        fetch(`/api/movies?search=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
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

    render() {
        return (
            <div>
                <Row>
                    <SearchBar search={this.state.search} handleSearch={this.handleSearch} />
                </Row>
                <Button variant="primary" onClick={() => this.setState({ displayFilters: !this.state.displayFilters })}>Show Filters</Button>
                <Row>
                    {this.state.displayFilters ? <Filters providers={this.state.providers} selectedProviders={this.state.selectedProviders} handleProviderChange={this.handleProviderChange} genres={this.state.genres} selectedGenres={this.state.selectedGenres} handleGenreChange={this.handleGenreChange} handleYearChange={this.handleYearChange} minYear={this.state.minYear} maxYear={this.state.maxYear} /> : null}
                </Row>
                <Row>
                {this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </Row>
            </div>
        )
    }
}
