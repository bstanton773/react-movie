import React, { Component } from 'react'
import './static/Trailer.css'

export default class Trailer extends Component {
    render() {
        return (
            <div className='resp-container'>
                <iframe
                    className='resp-iframe'
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
            </div>
        )
    }
}
