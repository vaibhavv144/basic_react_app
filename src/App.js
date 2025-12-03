import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserFilter from './components/UserFilter';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');

  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  
  const handleAddUser = useCallback((newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  }, [users]);

 
  const handleDeleteUser = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id));
  }, [users]);

  return (
    <div>
      <h1>User Manager</h1>
      {/* <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul> */}
      <AddUserForm onAdd={handleAddUser} />
      <input
        type="text"
        placeholder="Filter by name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <UserFilter users={users} filterText={filterText} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
