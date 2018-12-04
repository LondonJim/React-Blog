import React from 'react';

const Users = ({users, deleteUser}) => {
  const userList = users.map(user => {
    return user.age > 30 ? (
      <div className="peep" key={ user.id }>
        <div>Name: { user.name }</div>
        <div>Age: { user.age }</div>
        <div>Interests: { user.interests }</div>
        <button onClick={() => { deleteUser(user.id) } }>Delete User</button>
      </div>
    ) : null
  })

  return (
    <div className="user-list">
      { userList }
    </div>
  )
}

export default Users
