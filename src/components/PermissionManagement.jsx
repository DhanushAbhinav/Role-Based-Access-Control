import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PermissionManagement = () => {
  const { permissions } = useContext(AppContext);

  return (
    <div className="section">
      <h2>Permissions</h2>
      <ul>
        {permissions.map((perm, idx) => (
          <li key={idx}>{perm}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;