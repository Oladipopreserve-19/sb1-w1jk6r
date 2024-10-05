import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  )
}

export default App