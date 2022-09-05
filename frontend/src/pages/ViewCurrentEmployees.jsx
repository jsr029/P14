import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesList from '../components/EmployeesList'

function ViewCurrentEmployees() {
  return (
    <>  
      <div className='employees'>
        <EmployeesList />
      </div>            
      <Link to="/">Home</Link>
    </>
  )
}

export default ViewCurrentEmployees