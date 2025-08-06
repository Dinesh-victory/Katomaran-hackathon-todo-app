import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from './StatusBar'
import '../styles/LoginScreen.css'

const LoginScreen = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
    navigate('/dashboard')
  }

  const handleSignUp = () => {
    navigate('/register')
  }

  return (
    <main className="login-screen">
      <StatusBar />
      
      <div className="login-screen__background">
        <div className="login-screen__ellipse login-screen__ellipse--1"></div>
        <div className="login-screen__ellipse login-screen__ellipse--2"></div>
      </div>

      <section className="login-screen__content">
        <header className="login-screen__header">
          <h1 className="login-screen__title">Welcome Back!</h1>
        </header>

        <form className="login-screen__form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Confirm your password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="login-screen__forgot">
            <button type="button" className="login-screen__forgot-link">
              Forget password
            </button>
          </div>

          <button 
            type="button"
            className="login-screen__button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <footer className="login-screen__footer">
          <p className="login-screen__footer-text">
            Donot have an account? 
            <button 
              className="login-screen__link"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </p>
        </footer>
      </section>
    </main>
  )
}

export default LoginScreen
