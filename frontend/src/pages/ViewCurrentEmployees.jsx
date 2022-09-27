import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesList from '../components/EmployeesList'
import Table from '../components/DataTable/index'
import TableEmployees from '../components/TableEmployees'

function ViewCurrentEmployees() {
  const clickhandler = name => console.log("delete", name);
  const { employeesStore } = TableEmployees
  return (
    <>
      <div className='employees'>
        <h1 style={{ visibility: "hidden" }}>Current Employees</h1>
        <div className="App">
          <Table data={employeesStore} click={clickhandler} />
        </div>
      </div>
      <Link to="/">Home</Link>
    </>
  )
}

export default ViewCurrentEmployees