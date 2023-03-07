import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';

class App extends Component {
    render() {
      return(
        <div className='App'>
        <FunctionClick/>
        <ClassClick/>
          <Greet name="Jane" heroName={'batman'}></Greet>
          <Welcome name={'Ben'} heroName = 'Omwami' ></Welcome>
        </div>
      )
    }
}

export default App;
