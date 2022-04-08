import React, { useState, useEffect } from "react";
import axios from 'axios'
import Countries from "./components/Countries";
import Search from "./components/Search";
import FullCountry from "./components/FullCountry";

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY 

  //Grabs country data
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })    
  }, [])

  //Grabs weather data
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={${apiKey}}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  console.log(weather)

  //Handles search filter
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = search
        ? countries
            .filter(country => 
          country.name.common.toLowerCase()
          .includes(search.toLowerCase())
          )
        : countries

  return (
    <div>
      <Search searchValue={search} handleSearch={handleSearchChange}/>
      {/* Only shows less than 10, or single results based on search field. */}
      {countriesToShow.length >= 10
        ? <p>Too many results, refine your search</p>
        : countriesToShow.length === 1 
        ? countriesToShow.map(country =>           
          <FullCountry
            key={country.name.common}          
            countryName={country.name.common}
            capital={country.capital}
            area={country.area}
            languages={Object.entries(country.languages)}
            flag={country.flags}           
          />)
        : countriesToShow.map(country =>           
            <Countries
              key={country.name.common}          
              countryName={country.name.common}
              capital={country.capital}
              area={country.area}
              languages={Object.entries(country.languages)}
              flag={country.flags}                             
            />
      )}            
    </div>
  );
}

export default App;
