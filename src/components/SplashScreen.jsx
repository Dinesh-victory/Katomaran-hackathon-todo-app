import React from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from './StatusBar'
import '../styles/SplashScreen.css'

const SplashScreen = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/register')
  }

  return (
    <main className="splash-screen">
      <StatusBar />
      
      <div className="splash-screen__background">
        <div className="splash-screen__ellipse splash-screen__ellipse--1"></div>
        <div className="splash-screen__ellipse splash-screen__ellipse--2"></div>
      </div>

      <section className="splash-screen__content">
        <div className="splash-screen__illustration">
          <div className="illustration-container">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/H05RCQQcw7.svg" 
              alt="Phone illustration" 
              className="illustration__phone"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/3jwJqcCw6d.svg" 
              alt="Phone screen" 
              className="illustration__screen"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/u61AKR0Zd2.svg" 
              alt="Character hand" 
              className="illustration__hand"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/rXZVdPLpDz.svg" 
              alt="Character head" 
              className="illustration__head"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/taJCBBmaCd.svg" 
              alt="Character face" 
              className="illustration__face"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/Vu3bxDoOm0.svg" 
              alt="Character shirt" 
              className="illustration__shirt"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/gmq0AGq4gp.svg" 
              alt="Character arm" 
              className="illustration__arm"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/e69Gb2Eeik.svg" 
              alt="Character body" 
              className="illustration__body"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/3K4GU17cd8.svg" 
              alt="Character left arm" 
              className="illustration__left-arm"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/JjjiQ0G32o.svg" 
              alt="Character left sleeve" 
              className="illustration__left-sleeve"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/6r1eDHojOC.svg" 
              alt="Right foot" 
              className="illustration__right-foot"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/8aVNTLXbzz.svg" 
              alt="Right shoe" 
              className="illustration__right-shoe"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/KTMuEk4Bj2.svg" 
              alt="Left foot" 
              className="illustration__left-foot"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/03nozqAeEL.svg" 
              alt="Left shoe" 
              className="illustration__left-shoe"
            />
          </div>
        </div>

        <article className="splash-screen__text">
          <h1 className="splash-screen__title">Get things with TO DO</h1>
          <p className="splash-screen__description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </article>

        <button 
          className="splash-screen__button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </section>
    </main>
  )
}

export default SplashScreen
