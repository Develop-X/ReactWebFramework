import React, { Component } from 'react';
import Header from './Header';
import Registration from './Registration';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header className="App-header"/>
          <Registration/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
