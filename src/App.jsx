import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import RegisterScreen from './components/RegisterScreen'
import LoginScreen from './components/LoginScreen'
import DashboardScreen from './components/DashboardScreen'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
