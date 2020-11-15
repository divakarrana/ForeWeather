import React from 'react'
import styles from './cards.module.css';

const cards = (props) => {

    //Waiting for the API response
    let allCards = (<div className={styles.loading}>Gathering weather data... <i className="fas fa-cog"></i></div>);

    //Successful API response results
    if(props.weatherData){
        allCards = props.weatherData.map( dayWeather => {

            //Formatting date 
            dayWeather.dt_txt =  new Date(dayWeather.dt_txt).toDateString();

            //Preparing JSX of cards with data
            return(
                <div className={styles.card} key={dayWeather.dt_txt} data-testid="card">
                    <div className={styles.cardHead}>
                        <div className={styles.cardHeadTemp}>{dayWeather.main.temp}&#176;</div>
                        <div className={styles.cardHeadDate}>{dayWeather.dt_txt}</div>
                        <div className={styles.cardHeadHumidity}><i className="fas fa-tint"></i>{dayWeather.main.humidity}% Humid</div>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.weatherStats}>
                            <i className="fas fa-cloud-sun"></i>Weather:&nbsp;{dayWeather.weather.map(el => el.main).join(",")}
                        </div>
                        <div className={styles.windStats}>
                            <i className="fas fa-wind"></i>Wind:&nbsp;{dayWeather.wind.speed}km/h
                        </div>
                        <div className={styles.pop}>
                            <i className="fas fa-cloud-rain"></i>Precipitation:&nbsp;{dayWeather.pop}%
                        </div>
                        <div className={styles.pop}>
                            <i className="fas fa-tachometer-alt"></i>Pressure:&nbsp;{dayWeather.main.pressure}hPa
                        </div>
                    </div>
                </div>
                );
        });
    }

    //Rendering Cards
    return (
        <div className={styles.container}>
            {allCards}
        </div>
    )
}

export default cards;
