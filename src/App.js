import React, { Component } from 'react';
import Extra from './Extra'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Starter</h1>
        <p>Welcome</p>
        <Extra name="John" age="33" interests="Running"/>
      </div>
    );
  }
}

export default App;
