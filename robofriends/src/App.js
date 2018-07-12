import React, { Component } from 'react';
import {robots} from './robots';
import {Robots} from './components/Robots';
import {Search} from './components/Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      search: ''
    }
    this.filterRobots = this.filterRobots.bind(this);
  }

  filterRobots(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    let filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className="App">
        <Search filterRobots={this.filterRobots}/>
        <Robots robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
