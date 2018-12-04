import React, { Component } from 'react';
import Users from './Users'
import AddUser from './AddUser.js'

class App extends Component {

  state = {
    users : [
      { name: "John", age: 33, interests: "Running", id: 1},
      { name: "Kat", age: 37, interests: "Movies", id: 2},
      { name: "Bob", age: 30, interests: "Gaming", id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Starter</h1>
        <p>Welcome</p>
        <Users users={ this.state.users } />
        <AddUser />
      </div>
    );
  }
}

export default App;
