import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false,
            redirect: props.isAuthenticated
        }
    };

    componentDidUpdate(prevProps, prevState){
        if (prevProps.isAuthenticated !== this.props.isAuthenticated){
            this.setState({redirect:true})
        }
    }

    handleLoginSumbit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        this.props.login(username, password);
        this.setState({formSubmitted:true})

    }

    render() {
        return this.state.redirect ? <Navigate to={-1} /> :(
            <div className="rounded my-5 p-5">
                <h1 className="mb-3">Login</h1>
                <Form onSubmit={this.handleLoginSumbit}>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="Username" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </Form>
            </div>
        )
    }
}
