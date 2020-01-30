import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <h1>MadLib in React</h1>
      </header>
    );
  }
}
