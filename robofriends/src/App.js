import React, { Component } from 'react';
import {robots} from './robots';
import {Robots} from './components/Robots';
import './App.css';

class App extends Component {
  render() {
    console.log(robots)
    return (
      <div className="App">
        <Robots robots={robots}/>
      </div>
    );
  }
}

export default App;
