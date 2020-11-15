import React from 'react';
import styles from './header.module.css';

const header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logoBox}><i className="fas fa-smog"></i></div> 
            <h1 className={styles.appHeading}>Fore-Weather &nbsp;<span className={styles.subHeading}>5 day weather forecast for Mumbai</span></h1>
        </div>
    )
}

export default header;
