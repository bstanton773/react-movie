import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SortBy extends Component {
    render() {
        return (
            <div>
                <Form.Select onChange={this.props.handleSort}>
                    <option>Sort By</option>
                    <option value="rating@ASC">Ratings (Highest to Lowest)</option>
                    <option value="rating@DESC">Ratings (Lowest to Highest)</option>
                    <option value="year@DESC">Year (Newest First)</option>
                    <option value="year@ASC">Year (Oldest First)</option>
                </Form.Select>
            </div>
        )
    }
}
