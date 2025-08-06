import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from './StatusBar'
import '../styles/RegisterScreen.css'

const RegisterScreen = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = () => {
    navigate('/dashboard')
  }

  const handleSignIn = () => {
    navigate('/login')
  }

  return (
    <main className="register-screen">
      <StatusBar />
      
      <div className="register-screen__background">
        <div className="register-screen__ellipse register-screen__ellipse--1"></div>
        <div className="register-screen__ellipse register-screen__ellipse--2"></div>
      </div>

      <section className="register-screen__content">
        <header className="register-screen__header">
          <h1 className="register-screen__title">Welcome on New Ui !</h1>
          <p className="register-screen__subtitle">Your new began here , Let Started</p>
        </header>

        <form className="register-screen__form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <button 
            type="button"
            className="register-screen__button"
            onClick={handleRegister}
          >
            Register Now
          </button>
        </form>

        <footer className="register-screen__footer">
          <p className="register-screen__footer-text">
            Already have an account? 
            <button 
              className="register-screen__link"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </p>
        </footer>
      </section>
    </main>
  )
}

export default RegisterScreen
