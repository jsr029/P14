import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='create-employee'>              
      <h1>HRnet</h1>
        <Link to="/ViewCurrentEmployees">view current employees</Link>
      <h2>Create Employee</h2>
    </div>
  )
}

export default Home