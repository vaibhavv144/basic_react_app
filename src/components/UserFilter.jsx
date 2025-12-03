import React, { useMemo } from 'react';

const UserFilter = ({ users, filterText }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [users, filterText]);

  return (
    <div>
      <h2>Filtered Users</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFilter;
