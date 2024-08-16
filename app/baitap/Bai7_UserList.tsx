import React from 'react'
import { Link } from 'react-router-dom';
export default function Bai7_UserList() {
    const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
