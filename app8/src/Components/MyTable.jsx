import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const MyTable = () => {
  const [user, setUser] = useState([])
  const fetchData = async () => {
   try {
     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUser(res.data)
   } catch (error) {
    alert("Server error")
   }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1>Table</h1> 
      <table border='1' cellPadding='10' cellSpacing='0' width='400px'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {user.map((u) => (
          <tr>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default MyTable