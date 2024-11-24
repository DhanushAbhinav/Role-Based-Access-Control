import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const UserManagement = () => {
  const { users, addUser, updateUser, deleteUser, roles } = useContext(AppContext);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      addUser({ id: Date.now(), ...newUser, status: 'Active' });
      setNewUser({ name: '', role: '' });
    }
  };

  return (
    <div className="section">
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="User Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button
                  onClick={() =>
                    updateUser(user.id, { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' })
                  }
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;