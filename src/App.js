import React, {useState, useEffect} from 'react';

import Header from './components/Header/header';
import Cards from './components/Cards/cards';


function App() {
  //Defining initial state to store weather data
  const [weatherData, setweatherData] = useState();

  //Fetching weather data from API and mapping to state

  //`http://api.openweathermap.org/data/2.5/forecast?id=1275339&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=1275339&units=metric&appid=9036dc16bb6dfe2627295993204fcdca", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }})
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

  //Rendering root component and children
  return (
    <div className="App">
      <Header></Header>
      <Cards weatherData={weatherData}></Cards>
    </div>
     
  );
}

export default App;
