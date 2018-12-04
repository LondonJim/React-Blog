import React, { Component } from 'react';

class Extra extends Component{
  render() {
    // console.log(this.props)
    const { name, age, interests } = this.props

    return(
      <div className="Me">
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Interests: { interests }</div>
      </div>

    )
  }
}

export default Extra
