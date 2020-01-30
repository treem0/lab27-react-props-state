import React from 'react';
import Madlib from '../containers/Madlib';
import Header from './Header';
import Footer from './Footer';
import ClearButton from './buttons/ClearButton';

export default function App() {
  return (
    <>
      <Header />
      <Madlib />
      {/* <ClearButton onClick={this.onClick}/> */}
      <Footer />
    </>
  );
}
