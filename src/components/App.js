import React from 'react';
import '../styles/App.css';
import Keyboard from './Keyboard';
import { connect } from 'react-redux';
import { pickAnimal } from '../actions/';

let App = ({ dispatch }) => {
  const onClick = e => {
    e.preventDefault();
    const output = e.target.value;
    dispatch(pickAnimal(output));
  }
  return (
    <div>
      <h1>Animal Keyboard!</h1>
      <input type="button" value="Cat" onClick={onClick} />
      <input type="button" value="Dog" onClick={onClick} />
      <input type="button" value="Bird" onClick={onClick} />
      <Keyboard />
    </div>
  )
}

App = connect(state => state)(App);

export default App;
