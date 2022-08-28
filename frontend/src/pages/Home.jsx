import React from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr"; // the locale you want
import Select from "react-select";
import states from '../data/state'

registerLocale("fr", fr); // register it with the name you want

function Home() {
  const { control, formState: { errors }, register, handleSubmit } = useForm();
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
    localStorage.setItem('employees', JSON.stringify(data))
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
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            {...register('first-name', { required: "First Name is required" })}
          />
          <ErrorMessage errors={errors} name="first-name" />
          <ErrorMessage
            errors={errors}
            name="first-name"
            render={({ message }) => <p>{message}</p>}
          />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" {...register('lest-name', { required: "Last Name is required" })} />
          <ErrorMessage errors={errors} name="last-name" />
          <ErrorMessage
            errors={errors}
            name="last-name"
            render={({ message }) => <p>{message}</p>}
          />


          <label htmlFor="date-of-birth">Date of Birth</label>
          <Controller
            control={control}
            name='date-of-birth'
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

          <label htmlFor="start-date">Start Date</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name='start-date'
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

            <label htmlFor="state">State</label>
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
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" {...register('zip-code', { required: true })} />
          </fieldset>

          <label htmlFor="department">Department</label>

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