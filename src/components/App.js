import React from 'react';
import { store } from '../index.js';
import '../styles/App.css';
import Keyboard from './Keyboard';
import { connect } from 'react-redux';
import { pickAnimal } from '../actions/';


class App extends React.Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
      this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    componentDidMount () {
      window.addEventListener('keydown', this.handleOnKeyDown);
    }

    onClick (e) {
      e.preventDefault()
      const output = e.target.value;
      store.dispatch(pickAnimal(output));
    }

    handleOnKeyDown (e) {
      console.log('🍕');
      e.preventDefault()
      // const keyCode = document.querySelector(`.keyDiv[data-key="${e.keyCode}"]`);
      // console.log(e.keyCode);
      // audio.play(testArr[e.keyCode])
    }

    render() {
      return (
        <div>
          <h1>Animal Keyboard!</h1>
          <input type="button" value="Cat" onClick={this.onClick} />
          <input type="button" value="Dog" onClick={this.onClick} />
          <input type="button" value="Bird" onClick={this.onClick} />
          <Keyboard />
        </div>
      )
    }
}



//
// let App = ({ dispatch }) => {
//   const onClick = e => {
//     e.preventDefault();
//     const output = e.target.value;
//     dispatch(pickAnimal(output));
//   }
//   return (
//     <div>
//       <h1>Animal Keyboard!</h1>
//       <input type="button" value="Cat" onClick={onClick} />
//       <input type="button" value="Dog" onClick={onClick} />
//       <input type="button" value="Bird" onClick={onClick} />
//       <Keyboard />
//     </div>
//   )
// }

App = connect(state => state)(App);

export default App;
