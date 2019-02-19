import React from 'react';
import styles from './Cat.css';

export default class Cat extends React.Component {
    render() {
        return (
            <div className={styles.cat}>
                <div className={styles.catLegs} />
                <div className={styles.catTail} />
            </div>
        );
    }
}