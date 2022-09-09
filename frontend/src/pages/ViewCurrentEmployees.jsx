import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesList from '../components/EmployeesList'
import TableEmployees from '../components/TableEmployees'

function ViewCurrentEmployees() {
  return (
    <>  
      <div className='employees'>
        <h1 style={{visibility: "hidden"}}>Current Employees</h1>
        <TableEmployees />
      </div>            
      <Link to="/">Home</Link>
    </>
  )
}

export default ViewCurrentEmployees