import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/Hello';

class App extends Component {
    render() {
      return(
        <div className='App'>

          <Greet name='Joy' heroName="batman">
            <p>This is children props</p>
          </Greet>
          <Greet name='Mary' heroName="spider man">
            <button>Action</button>
          </Greet>
          <Greet name='Ken' heroName="ant man"/>

        <Welcome  name='Joy' heroName="batman"/>
        <Welcome name='Mary' heroName="spider man"/>
        <Welcome name='Ken' heroName="ant man"/>
        </div>
      )
    }
}

export default App;
