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

  addUser = (user) => {
    user.id = Math.random()
    let users = [...this.state.users, user]
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Starter</h1>
        <p>Welcome</p>
        <Users users={ this.state.users } />
        <AddUser addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
