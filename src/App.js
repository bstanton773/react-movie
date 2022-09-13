import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import MovieDetail from './views/MovieDetail';
import Register from './views/Register';
import AlertMessage from './components/AlertMessage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Watchlist from './views/Watchlist';
import MyRatings from './views/MyRatings';
import Following from './views/Following';

library.add(fab);


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
            sortBy: 'rating@ASC',
            currentPage: 1,
            apiBaseURL: window.location.origin === 'http://localhost:3000' ? 'http://localhost:5000' : 'https://movie-reviews-bstanton.herokuapp.com',
            userMessage: null,
            showMessage: false,
            categoryMessage: null,
            isAuthenticated: localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > today ? true : false,
            user: null
        };
    }

    async componentDidMount() {
        const res = await fetch(`${this.state.apiBaseURL}/api/movies`)
        const movies = await res.json()
        const user = await this.getUser()
        this.setState({ movies, user })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search || prevState.selectedProviders !== this.state.selectedProviders || prevState.selectedGenres !== this.state.selectedGenres || prevState.minYear !== this.state.minYear || prevState.maxYear !== this.state.maxYear || prevState.currentPage !== this.state.currentPage || prevState.sortBy !== this.state.sortBy) {
            const search = this.state.search;
            const selectedProviders = this.state.selectedProviders.join(', ');
            const selectedGenres = this.state.selectedGenres.join(', ');
            const minYear = this.state.minYear;
            const maxYear = this.state.maxYear;
            const currentPage = this.state.currentPage;
            const sortBy = this.state.sortBy;
            fetch(`${this.state.apiBaseURL}/api/movies?search=${search}&providers=${selectedProviders}&genres=${selectedGenres}&minYear=${minYear}&maxYear=${maxYear}&page=${currentPage}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data });
            });
        } else if (prevState.isAuthenticated !== this.state.isAuthenticated){
            this.getUser()
        }
    }

    getUser = () => {
        if (this.state.isAuthenticated){
            const myHeaders = new Headers();
            const token = localStorage.getItem('token')
            myHeaders.append('Authorization', `Bearer ${token}`)
            fetch(`${this.state.apiBaseURL}/api/me`, {
                headers:myHeaders
            }).then(res => res.json())
                .then(user => this.setState({user}))
        } else {
            this.setState({user:null})
        }
    }

    handleSearch = (e) => {
        const search = e.target.value;
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

    handleSort = (e) => {
        const sortBy = e.target.value;
        this.setState({ sortBy, currentPage: 1 });
    }

    handleFilter = (displayFilters) => {
        this.setState({ displayFilters });
    }

    handlePageChange = (currentPage) => {
        this.setState({ currentPage });
        window.scrollTo(0, 0);
    }

    handleMessage = (message, category) => {
        this.setState({ userMessage: message, showMessage: true, categoryMessage: category });
        window.scrollTo(0, 0);
    }

    closeAlert = () => {
        this.setState({ showMessage: false });
    }

    register = async (email, username, password) => {
        let res = await fetch(`${this.state.apiBaseURL}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                username,
                password
            })
        })
        let data = await res.json()
        return await data
    }

    login = async (username, password) => {
        let res = await fetch(`${this.state.apiBaseURL}/api/token`, {
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
        let data = await res.json()
        if (data.status === 'error'){
            this.handleMessage(data.message, 'danger')
        } else {
            this.handleMessage(`You have succesfully logged in!`, 'success')
            localStorage.setItem('token', data.token)
            localStorage.setItem('expiration', new Date(data.token_expiration))
            this.setState({
                isAuthenticated: true
            })
        }
    }

    logout = () => {
        localStorage.removeItem('token')
        this.handleMessage('You have succesfully logged out.', 'warning')
        this.setState({
            isAuthenticated: false,
            user: null
        })
    }

    render() {
        return (
        <>
        <Navigation isAuthenticated={this.state.isAuthenticated} logout={this.logout}/>
        <Container className='pt-5'>
            <AlertMessage message={this.state.userMessage} show={this.state.showMessage} category={this.state.categoryMessage} closeAlert={this.closeAlert}/>
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
                    handleSort={this.handleSort}
                    handleFilter={this.handleFilter}
                    handlePageChange={this.handlePageChange}
                    />
                } />
                <Route exact path="/movies/:id" element={
                    <MovieDetail 
                    apiBaseURL={this.state.apiBaseURL} 
                    handleMessage={this.handleMessage}
                    isAuthenticated={this.state.isAuthenticated}
                    getUser={this.getUser}
                    user={this.state.user}
                    />
                }/>
                <Route exact path="/register" element={
                    <Register 
                    register={this.register}
                    handleMessage={this.handleMessage}
                    isAuthenticated={this.state.isAuthenticated}
                    />
                } />
                <Route exact path="/login" element={
                    <Login
                    login={this.login}
                    handleMessage={this.handleMessage}
                    isAuthenticated={this.state.isAuthenticated}
                    />
                } />
                <Route exact path="/watchlist" element={
                    <Watchlist 
                    apiBaseURL={this.state.apiBaseURL}
                    handleMessage={this.handleMessage}
                    isAuthenticated={this.state.isAuthenticated}
                    user={this.state.user}
                    />
                } />
                <Route exact path="/my-ratings" element={
                    <MyRatings
                    apiBaseURL={this.state.apiBaseURL}
                    handleMessage={this.handleMessage}
                    isAuthenticated={this.state.isAuthenticated}
                    user={this.state.user}
                    />
                } />
                <Route exact path="/following" element={<Following />} />
            </Routes>
        </Container>
        </>
        )
    }
}
