import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const RoleManagement = () => {
  const { roles, addRole, deleteRole, permissions } = useContext(AppContext);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const handleAddRole = () => {
    if (newRole.name) {
      addRole({ id: Date.now(), ...newRole });
      setNewRole({ name: '', permissions: [] });
    }
  };

  const togglePermission = (perm) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  return (
    <div className="section">
      <h2>Role Management</h2>
      <input
        type="text"
        placeholder="Role Name"
        value={newRole.name}
        onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
      />
      <div>
        {permissions.map((perm) => (
          <label key={perm}>
            <input
              type="checkbox"
              checked={newRole.permissions.includes(perm)}
              onChange={() => togglePermission(perm)}
            />
            {perm}
          </label>
        ))}
      </div>
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(', ')}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;