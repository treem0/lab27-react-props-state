import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ClearButton = ({ onClick }) => (
  <button onClick={onClick}>Clear</button>
);



ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ClearButton;
