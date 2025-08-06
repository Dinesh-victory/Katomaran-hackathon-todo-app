import React from 'react'
import '../styles/StatusBar.css'

const StatusBar = () => {
  return (
    <header className="status-bar">
      <div className="status-bar__time">9:40</div>
      <div className="status-bar__icons">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/YHzye2Dxik.svg" 
          alt="Signal" 
          className="status-bar__icon"
        />
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/364wAypgAs.svg" 
          alt="WiFi" 
          className="status-bar__icon"
        />
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/rLUdzJfgJw.svg" 
          alt="Battery" 
          className="status-bar__icon"
        />
      </div>
    </header>
  )
}

export default StatusBar
