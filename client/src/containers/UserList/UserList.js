import React, { useState, useEffect } from 'react'
import axios from '../../axios-placeholer'
import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // get user from json db
    axios
      .get('/users')
      .then(res => {
        const fetchedApplicants = []
        for (const key in res.data) {
          fetchedApplicants.push({
            ...res.data[key],
            id: key
          })
        }
        setLoading(false)
        console.log('fetchedApplicants: ', fetchedApplicants)
        setUsers(fetchedApplicants)
      })
      .catch(_err => {
        setLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      <h1>User Information</h1>
      {loading && <h3>loading...</h3>}
      <table className='listTable'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>View Albums</th>
          </tr>
          {users.map(({ id, name, username, company, phone }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td>{company.name}</td>
              <td><a href={`/userDetails/${id}`}>View Albums</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
