import React, { useState, useEffect } from 'react'
import Country from './Country'
import CountryList from './CountryList'

const Countries = ({ countries, filter }) => {
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredCountries(newFilteredCountries)
  }, [countries, filter])

  const handleShowCountry = (country) => {
    setFilteredCountries([country])
  }

  const filteredCountriesCount = filteredCountries.length

  //prettier-ignore
  return (
    filteredCountriesCount > 10 ? <div>Too many matches, specify another filter</div> :
    filteredCountriesCount === 1 ? <Country country={filteredCountries[0]} /> :
    filteredCountriesCount > 0 ? <CountryList countries={filteredCountries} handleShowCountry={handleShowCountry} /> :
    <div>No matches, specify another filter</div>
  );
}

export default Countries
