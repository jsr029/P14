import React from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr"; // the locale you want
import Select from "react-select";
import states from '../data/state'
import { useSelector, useDispatch } from 'react-redux'
import { employees } from '../actions/index'

registerLocale("fr", fr); // register it with the name you want

function Home() {
  const { control, formState: { errors }, register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const options = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ];
  const statesArray = []
  states.map((n, index) => {
    return statesArray.push({ value: n.name, label: n.name })
  })

  const onSubmit = data => {
    //localStorage.setItem('employees', JSON.stringify(data))
    //localStorage.removeItem('employees')
    dispatch(employees(data))
  }

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to='/viewcurrentemployees'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register('firstname', { required: "First Name is required" })}
          />
          <ErrorMessage errors={errors} name="firstname" />
          <ErrorMessage
            errors={errors}
            name="firstname"
            render={({ message }) => <p>{message}</p>}
          />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" {...register('lastname', { required: "Last Name is required" })} />
          <ErrorMessage errors={errors} name="lastname" />
          <ErrorMessage
            errors={errors}
            name="lastname"
            render={({ message }) => <p>{message}</p>}
          />


          <label htmlFor="dateofbirth">Date of Birth</label>
          <Controller
            control={control}
            name='dateofbirth'
            render={({ field }) => (
              <DatePicker
                placeHolderText="Date of Birth"
                locale="fr"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />

          <label htmlFor="startdate">Start Date</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name='startdate'
            render={({ field }) => (
              <DatePicker
                placeHolderText="Start Date"
                locale="fr"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" {...register('street', { required: true })} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" {...register('city', { required: true })} />

            <label htmlFor="State">State</label>
            <Controller
              control={control}
              rules={{ required: true }}
              name='State'
              render={({ field }) => (
                <Select
                  className='StatesSelect'
                  options={statesArray}
                  onChange={(stat) => field.onChange(stat)}
                  selected={field.value}
                />
              )}
            />
            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" type="number" {...register('zipcode', { required: true })} />
          </fieldset>

          <label htmlFor="Departement">Departement</label>

          <Controller
            control={control}
            rules={{ required: true }}
            name='Departement'
            render={({ field }) => (
              <Select
                className='react-select__option'
                options={options}
                onChange={(dep) => field.onChange(dep)}
                selected={field.value}
              />
            )}
          />
          <div className='button'>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>
    </>
  )
}


export default Home