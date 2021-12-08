import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Navigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { InputGroup } from 'react-bootstrap'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formSubmitted: false
        }
    }

    handleRegisterSumbit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const username = e.target.username.value
        const password = e.target.password.value
        const confirmPass = e.target.confirmPass.value
        if (password !== confirmPass) {
            this.props.handleMessage('Passwords do not match', 'danger')
        } else {
            let data = await this.props.register(email, username, password)
            if (data.status === 'error'){
                this.props.handleMessage(data.message, 'danger')
            } else {
                this.props.handleMessage(`Thank you for registering ${data.username}`, 'success')
                this.setState({ formSubmitted: true })
            }
        }
    }

    render() {
        return this.state.formSubmitted ? <Navigate to='/' /> :(
            <div className="bg-light rounded my-5 p-5">
                <h1 className="mb-3">Create Account</h1>
                <Form onSubmit={this.handleRegisterSumbit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                            <Form.Control name="email" type="email" placeholder="Email" />
                        </InputGroup>
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                            <Form.Control name="confirmPass" type="password" placeholder="Confirm Password" />
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
