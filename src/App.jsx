import React from 'react'
import UserManagement from './components/UserManagement'
import RoleManagement from './components/RoleManagement'
import PermissionManagement from './components/PermissionManagement'
import {AppProvider} from './context/AppContext'

const App = () => {
  return (
    <AppProvider>
      <div className="app-container">
        <h1 className="app-title">RBAC Dashboard</h1>
        <UserManagement />
        <RoleManagement />
        <PermissionManagement />
      </div>
    </AppProvider>
  )
}

export default App
