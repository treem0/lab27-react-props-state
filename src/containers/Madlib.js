import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs: {}
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState, 
      inputs:{ 
        ...prevState.inputs, [target.name]: target.value
      }
    }));
  }

  handleClear = () => {
    this.setState({
      showResult: false,
      words: [],
      inputs: {}
    });
  }


  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.createWordsArray();
    this.toggleResult();
  }

  createWordsArray = () => {
    this.setState(prevState => ({ 
      words: [
        prevState.inputs['0'],
        prevState.inputs['1'],
        prevState.inputs['2'],
        prevState.inputs['3'],
        prevState.inputs['4'],
        prevState.inputs['5'],
        prevState.inputs['6'],
        prevState.inputs['7'],
        prevState.inputs['8'],
        prevState.inputs['9'],
        prevState.inputs['10'],
        prevState.inputs['11']
      ]
    }));
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onClick={this.handleClear} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
