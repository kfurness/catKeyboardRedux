import React from 'react';
import Keys from './Keys';
import { connect } from 'react-redux';

let Keyboard = (state) => {
  const keys = Object.keys(state.animalData);
  return (
    <div>
      <p>Please play!</p>
      {keys.map( (c, i) => <Keys
        img={state.animalData[c].img}
        sound={state.animalData[c].sound}
        letter={state.animalData[c].letter}
        key={i} />)}
    </div>
  )
}

Keyboard = connect(state => state)(Keyboard);

export default Keyboard;
