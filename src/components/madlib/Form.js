import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, onClick }) => (
  <form>
    <input onChange={onChange} name="0" type="text" placeholder="adjective" />
    <input onChange={onChange} name="1" type="text" placeholder="noun" />
    <input onChange={onChange} name="2" type="text" placeholder="verb, past tense" />
    <input onChange={onChange} name="3" type="text" placeholder="adverb" />
    <input onChange={onChange} name="4" type="text" placeholder="adjective" />
    <input onChange={onChange} name="5" type="text" placeholder="noun" />
    <input onChange={onChange} name="6" type="text" placeholder="noun" />
    <input onChange={onChange} name="7" type="text" placeholder="adjective" />
    <input onChange={onChange} name="8" type="text" placeholder="verb" />
    <input onChange={onChange} name="9" type="text" placeholder="adverb" />
    <input onChange={onChange} name="10" type="text" placeholder="verb, past tense" />
    <input onChange={onChange} name="11"type="text" placeholder="adjective" />
    <button onClick={onSubmit}>Create Madlib</button>
    <button onClick={onClick}>Clear</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;
