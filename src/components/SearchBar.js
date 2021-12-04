import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class SearchBar extends Component {

    render() {
        return (
            <Form className='my-3'>
                <Form.Control type="text" placeholder="Search Movie, Director, Actor, etc." onChange={this.props.handleSearch} defaultValue={this.props.search}/>
            </Form>
        )
    }
}
