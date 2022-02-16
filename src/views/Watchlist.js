import React, { useState, useEffect } from 'react'
import Row  from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router'

export default function Watchlist(props) {
  const navigate = useNavigate();
  if (!props.isAuthenticated){
    navigate('/login')
    props.handleMessage('You must be logged in to view your watchlist', 'warning')
  }
  
  const [watchlist, setWatchlist] = useState([])
  useEffect(() => {
    const myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append('Authorization', `Bearer ${token}`)
    fetch(`${props.apiBaseURL}/api/watchlist`, {
      headers: myHeaders
    })
    .then(res => res.json())
    .then(data => {
      setWatchlist(data)
    })
  }, [props.apiBaseURL])

  return (
    <>
    <h1 className='mt-3'>My Watchlist</h1>
    <hr />
    <Row>
      {watchlist.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </Row>
    </>
  )
}
