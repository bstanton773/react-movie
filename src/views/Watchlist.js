import React, { useState, useEffect } from 'react'
import Row  from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'

export default function Watchlist(props) {
  const [watchlist, setWatchlist] = useState([])
  useEffect(() => {
    console.log(props.apiBaseURL)
    const myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append('Authorization', `Bearer ${token}`)
    fetch(`${props.apiBaseURL}/api/watchlist`, {
      headers: myHeaders
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWatchlist(data)
    })
  }, [props.apiBaseURL])
  return (
    <>
    <h1>My Watchlist</h1>
    <hr />
    <Row>
      {watchlist.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </Row>
    </>
  )
}
