import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <p>Made by Travis Molter in React</p>
      </footer>
    );
  }
}
