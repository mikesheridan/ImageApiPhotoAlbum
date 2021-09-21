import React, { useState, useEffect } from 'react'
import axios from '../../axios-placeholer'
import './Photos.css'

const Photos = props => {
  const { match } = props

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // get user from json db
    axios
      .get(`/albums/${match.params.id}/photos`)
      .then(res => {
        const fetchedApplicants = []
        for (const key in res.data) {
          fetchedApplicants.push({
            ...res.data[key],
            id: key
          })
        }
        setLoading(false)
        setPhotos(fetchedApplicants)
      })
      .catch(_err => {
        console.log('error')
        setLoading(false)
      })
  }, [])

  console.log('photos: ', photos)

  return (
    <div className='container'>
      <h1>User Information</h1>
      {loading && <h3>loading...</h3>}
      <ul>
        {photos.map(({ id, title, UserDetails, thumbnailUrl }) => (
          <li key={id}>
            <img src={thumbnailUrl} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Photos
