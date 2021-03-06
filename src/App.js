import React, {useState, useEffect} from 'react';

import Header from './components/Header/header';
import Cards from './components/Cards/cards';
import City from './components/City/city';


function App() {
  //Defining initial state to store weather data
  const [weatherData, setweatherData] = useState();

  //Fetching weather data from API and mapping to state
  useEffect(() => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=1275339&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    fetch(`${cors}${url}`)
      .then((response) => response.json())  
      .then((data) => setweatherData(filterDays(data.list)))
      .catch((error) => console.log(error.message));
  }, []);

  //Filtering day-wise data
  const filterDays = (weatherInfo) => {
    let prevDate = '';
    return weatherInfo.filter( weather => {
      let currDate = weather.dt_txt.split(" ")[0];
      if(currDate === prevDate){
        return false;
      }
      prevDate = currDate;
      return true;
    });
  }

  //Make API request for city
  const cityWeather = (city) => {
    setweatherData(false);
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    fetch(`${cors}${url}`)
      .then(
        (response) => response.json())  
      .then(
        (data) => setweatherData(filterDays(data.list)))
      .catch((error) => {
        console.log("Please check your city name and try again!");
        setweatherData('No Data');
      });
  }

  //Rendering root component and children
  return (
    <div className="App">
      <Header></Header>
      <City searchCityWeather={cityWeather}></City>
      <Cards weatherData={weatherData}></Cards>
    </div>
     
  );
}

export default App;
