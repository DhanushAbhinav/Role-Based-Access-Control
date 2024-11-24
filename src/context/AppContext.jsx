import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']);

  const addUser = (user) => setUsers([...users, user]);
  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const addRole = (role) => setRoles([...roles, role]);
  const updateRole = (id, updatedRole) => {
    setRoles(roles.map((role) => (role.id === id ? updatedRole : role)));
  };
  const deleteRole = (id) => setRoles(roles.filter((role) => role.id !== id));

  return (
    <AppContext.Provider
      value={{
        users,
        roles,
        permissions,
        addUser,
        updateUser,
        deleteUser,
        addRole,
        updateRole,
        deleteRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};