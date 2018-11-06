import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyClock from './testing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyClock/>
        </header>
      </div>
    );
  }
}

export default App;
