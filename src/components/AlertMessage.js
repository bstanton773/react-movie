import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export default class AlertMessage extends Component {
    render() {
        return (
            <div>
                <Alert show={this.props.show} variant={this.props.category} onClose={this.props.closeAlert} dismissible>
                    <p className='text-center'>
                        <strong>{this.props.message}</strong>
                    </p>
                </Alert>
            </div>
        )
    }
}
