// Country component
// The Country component is responsible for rendering information about a country, including its name, capital, population, and languages.
// The component also renders a flag of the country.
//
import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      <ul>
        {Object.keys(country.languages).map((langCode) => (
          <li key={langCode}>{country.languages[langCode]}</li>
        ))}
      </ul>
      <div>{country.flag}</div>
      <Weather capital={country.capital} />
    </div>
  )
}

export default Country
