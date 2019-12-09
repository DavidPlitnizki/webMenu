import React from 'react';
import styles from './Contact.scss';

const Contact = props =>{
        return(
            <div className={styles.container}>
                <div className={styles.info}>
                    <span>&#x260E; Tel:</span>
                    <span>(+34) 946 58 30 42</span>
                </div>
                <div className={styles.info}>
                    <span>Address:</span>
                    <span>Plaza de San Juan, 1 
                    48291 Atxondo, Bizkaia</span>
                </div>
                <div className={styles.map_container}>
                    <img src='../../assets/map.png' />
                </div>
            </div>
        )
}

export default Contact;