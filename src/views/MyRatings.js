import React, { useState, useEffect } from 'react'
import ListGroup  from 'react-bootstrap/ListGroup'
import Badge  from 'react-bootstrap/Badge'
import { useNavigate } from 'react-router'


export default function MyRatings(props) {
    const navigate = useNavigate();
    if (!props.isAuthenticated){
        navigate('/login')
        props.handleMessage('You must be logged in to view your ratings', 'warning')
    }
    
    const [myRatings, setMyRatings] = useState([])
    useEffect(() => {
        const myHeaders = new Headers();
        const token = localStorage.getItem('token')
        myHeaders.append('Authorization', `Bearer ${token}`)
        fetch(`${props.apiBaseURL}/api/my-ratings`, {
        headers: myHeaders
        })
        .then(res => res.json())
        .then(data => {
        setMyRatings(data)
        })
    }, [props.apiBaseURL])

    return (
        <>
            <h1 className='mt-3'>My Ratings</h1>
            <hr />
            <ListGroup as="ol" numbered>
            {myRatings.map(movie => (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={movie.id}>
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{movie.movie.endsWith('The') ? `The ${movie.movie.slice(0,-5)}` : movie.movie}</div>
                    {movie.year}
                    </div>
                    <Badge variant="primary" pill>
                    {movie.rating}
                    </Badge>
                </ListGroup.Item>
                )
            )}
            </ListGroup>
        </>
    )
}
