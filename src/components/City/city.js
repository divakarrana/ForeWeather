import React, {useState} from 'react';
import styles from './city.module.css';

const City = ({searchCityWeather}) => {

    const [city, setCity] = useState('');

    const setInput = (e) => {
        setCity(e.target.value);
    }

    return (
        <div className={styles.cityContainer}>
            <label className={styles.label} htmlFor="city">Enter City Name</label>
            <input id="city" type="text" onChange={setInput}/>
            <button className={styles.btn} onClick={() => searchCityWeather(city)}>How's the weather?</button>
        </div>
    );
}

export default City;
