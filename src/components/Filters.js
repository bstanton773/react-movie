import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class Filters extends Component {
    render() {
        let today = new Date();
        let thisYear = today.getFullYear();
        return (
            <Form className='bg-light rounded'>
                <Form.Label>Providers: </Form.Label>
                <Form.Group controlId="formProviders">
                    {this.props.providers.map((provider, index) => {
                        return (
                            <Form.Check type="checkbox" label={provider} key={index} inline onClick={this.props.handleProviderChange} id={provider} defaultChecked={this.props.selectedProviders.includes(provider.replace('+', '%2B'))} />
                        )
                    }
                )}
                </Form.Group>
                <Form.Label>Genres: </Form.Label>
                <Form.Group controlId="formGenres">
                    {this.props.genres.map((genre, index) => {
                        return (
                            <Form.Check type="checkbox" label={genre} key={index} inline onClick={this.props.handleGenreChange} id={genre} defaultChecked={this.props.selectedGenres.includes(genre)}/>
                        )
                    }
                )}
                </Form.Group>
                <Form.Label>Year: {this.props.minYear}-{this.props.maxYear} </Form.Label>
                <Range allowCross={false} min={1900} max={thisYear} defaultValue={[this.props.minYear, this.props.maxYear]} onChange={this.props.handleYearChange}/>
            </Form>
        )
    }
}
