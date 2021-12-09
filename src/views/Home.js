import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filters from '../components/Filters';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import SortBy from '../components/SortBy';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Row>
                    <SearchBar search={this.props.search} handleSearch={this.props.handleSearch} />
                </Row>
                <Row>
                    <Col>
                        <Button className='' variant="primary" onClick={() => this.props.handleFilter(!this.props.displayFilters)}>
                            {this.props.displayFilters ? "Hide Filters" : "Show Filters"}
                        </Button>
                    </Col>
                    <Col md={4}>
                        <SortBy handleSort={this.props.handleSort} />
                    </Col>
                </Row>
                <Row>
                    {this.props.displayFilters ? <Filters providers={this.props.providers} selectedProviders={this.props.selectedProviders} handleProviderChange={this.props.handleProviderChange} genres={this.props.genres} selectedGenres={this.props.selectedGenres} handleGenreChange={this.props.handleGenreChange} handleYearChange={this.props.handleYearChange} minYear={this.props.minYear} maxYear={this.props.maxYear} /> : null}
                </Row>
                <div className='d-flex justify-content-between'>
                    {this.props.currentPage > 1 ? <Button variant="primary" onClick={() => this.props.handlePageChange(this.props.currentPage-1)}>Last</Button> : <Button variant="primary" disabled>Last</Button>}
                    {this.props.movies.length === 30 ? <Button variant="primary" onClick={() => this.props.handlePageChange(this.props.currentPage+1)}>Next</Button> : <Button variant="primary" disabled>Next</Button>}
                </div>
                <Row>
                {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </Row>
                <div className='d-flex justify-content-between'>
                    {this.props.currentPage > 1 ? <Button variant="primary" onClick={() => this.props.handlePageChange(this.props.currentPage-1)}>Last</Button> : <Button variant="primary" disabled>Last</Button>}
                    {this.props.movies.length === 30 ? <Button variant="primary" onClick={() => this.props.handlePageChange(this.props.currentPage+1)}>Next</Button> : <Button variant="primary" disabled>Next</Button>}
                </div>
            </div>
        )
    }
}
