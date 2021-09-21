import React, { useState, useEffect } from 'react'
import axios from '../../axios-placeholer'
import './UserDetails.css'

const UserDetails = props => {
  const { match } = props

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // get user from json db
    axios
      .get('/albums/')
      .then(res => {
        const fetchedApplicants = []
        for (const key in res.data) {
          fetchedApplicants.push({
            ...res.data[key],
            id: key
          })
        }
        setLoading(false)
        setAlbums(fetchedApplicants)
      })
      .catch(_err => {
        console.log('error')
        setLoading(false)
      })
  }, [])

  const filteredAlbums = albums.filter(album => {
    console.log('album: ', album)
    return album.userId === parseInt(match.params.id, 10)
  })
  console.log('albums: ', albums)
  console.log('filteredAlbums: ', filteredAlbums)

  return (
    <div className='container'>
      <h1>User Information</h1>
      {loading && <h3>loading...</h3>}
      <ul>
        {filteredAlbums.length ? filteredAlbums.map(({ id, title }) => (
          <li key={id}>
            <a href={`/Photos/${id}`}>{title}</a>
          </li>
        ))
          : <h3>The user does not have any albums added</h3>}
      </ul>
    </div>
  )
}

export default UserDetails
