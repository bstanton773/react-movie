import React, { useState, useEffect, useCallback } from 'react'
import Row  from 'react-bootstrap/Row'
import WatchlistCard from '../components/WatchlistCard'

export default function Watchlist(props) {
  const [watchlist, setWatchlist] = useState([])
  const getWatchlist = useCallback(() => {
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

  useEffect(() => {
    getWatchlist()
  }, [getWatchlist])

  const removeFromWatchlist = (movieId) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append('Authorization', `Bearer ${token}`)
    fetch(`${props.apiBaseURL}/api/remove-from-watchlist/${movieId}`, {
      method: 'DELETE',
      headers: myHeaders
    }).then(res => res.json())
      .then(data => {
        if (data.status === 'success'){
          props.handleMessage(data.message, 'success')
        }
        getWatchlist()
      })
  }
  return (
    <>
    <h1 className='mt-3'>My Watchlist</h1>
    <hr />
    <Row>
      {watchlist.map(movie => <WatchlistCard key={movie.id} movie={movie} removeFromWatchlist={removeFromWatchlist} />)}
    </Row>
    </>
  )
}
