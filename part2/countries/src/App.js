import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterInput from './components/FilterInput'
import Countries from './components/Countries.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div>
      <FilterInput filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App
