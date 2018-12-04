import React from 'react';

const Extra = (props) => {
  // console.log(this.props)
  const { extras } = props
  const extraList = extras.map(extra => {
    return (
      <div className="peep" key={ extra.id }>
        <div>Name: { extra.name }</div>
        <div>Age: { extra.age }</div>
        <div>Interests: { extra.interests }</div>
      </div>
    )
  })

  return (
    <div className="extra-list">
      { extraList }
    </div>
  )
}

export default Extra
