// CountryList.js
import React from 'react'

const CountryList = ({ countries, handleShowCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.official}>
          <span>{country.name.common}</span>
          <button
            onClick={() => handleShowCountry(country)}
            style={{ display: 'inline-block', marginLeft: '5px' }}>
            show
          </button>
        </div>
      ))}
    </div>
  )
}

export default CountryList
