import React from 'react'
import StatusBar from './StatusBar'
import TaskList from './TaskList'
import '../styles/DashboardScreen.css'

const DashboardScreen = () => {
  return (
    <main className="dashboard-screen">
      <StatusBar />
      
      <div className="dashboard-screen__background">
        <div className="dashboard-screen__header-bg"></div>
        <div className="dashboard-screen__ellipse dashboard-screen__ellipse--1"></div>
        <div className="dashboard-screen__ellipse dashboard-screen__ellipse--2"></div>
      </div>

      <section className="dashboard-screen__content">
        <header className="dashboard-screen__header">
          <div className="dashboard-screen__profile">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/iyQwwZoeYd.png" 
              alt="Profile" 
              className="dashboard-screen__avatar"
            />
            <div className="dashboard-screen__greeting">
              <h1 className="dashboard-screen__welcome">Welcome Angel</h1>
              <p className="dashboard-screen__time-greeting">Good Evenning</p>
            </div>
          </div>

          <div className="dashboard-screen__clock">
            <div className="clock-container">
              <div className="clock-face">
                <div className="clock-number clock-number--12">12</div>
                <div className="clock-number clock-number--3">3</div>
                <div className="clock-number clock-number--6">6</div>
                <div className="clock-number clock-number--9">9</div>
                <div className="clock-hand clock-hand--hour"></div>
                <div className="clock-hand clock-hand--minute"></div>
                <div className="clock-center"></div>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-screen__tasks">
          <h2 className="dashboard-screen__tasks-title">Tasks List</h2>
          <TaskList />
        </section>
      </section>
    </main>
  )
}

export default DashboardScreen
