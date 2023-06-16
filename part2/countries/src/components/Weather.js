// Weather component
// The Weather component is responsible for fetching weather data from the openWeatherMap API and rendering it to the page.

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    if (!capital) return // Don't make the API call if the capital is not set

    const geoApi = 'http://api.openweathermap.org/geo/1.0/direct'
    const weatherApi = 'https://api.openweathermap.org/data/2.5/weather'
    const api_key = process.env.REACT_APP_API_KEY

    // First, fetch the latitude and longitude for the given city
    axios
      .get(geoApi, {
        params: {
          q: capital,
          limit: 1,
          appid: api_key,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0] // Extract latitude and longitude

          // Then, fetch the weather data using the latitude and longitude
          return axios.get(weatherApi, {
            params: {
              lat: lat,
              lon: lon,
              appid: api_key,
              units: 'metric',
            },
          })
        } else {
          throw new Error('Location not found')
        }
      })
      .then((response) => {
        setWeatherData(response.data) // Set the weather data in state
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
      })
  }, [capital])

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>
        <strong>temperature:</strong> {weatherData.current?.temperature} Celsius
      </div>
      <img
        src={weatherData.current?.weather_icons[0]}
        alt={weatherData.current?.weather_descriptions[0]}
      />
      <div>
        <strong>wind:</strong> {weatherData.current?.wind_speed} m/s
      </div>
    </div>
  )
}

export default Weather
