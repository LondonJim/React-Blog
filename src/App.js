import React, { Component } from 'react';
import Extra from './Extra'

class App extends Component {

  state = {
    extras : [
      { name: "John", age: 33, interests: "Running", id: 1},
      { name: "Kat", age: 37, interests: "Movies", id: 2},
      { name: "Bob", age: 31, interests: "Gaming", id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Starter</h1>
        <p>Welcome</p>
        <Extra extras={ this.state.extras }/>
      </div>
    );
  }
}

export default App;
