import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    name: null,
    age: null,
    interests: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addUser(this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={ this.handleChange }/>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" onChange={ this.handleChange }/>
          <label htmlFor="interests">Interests:</label>
          <input type="text" id="interests" onChange={ this.handleChange }/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddUser
