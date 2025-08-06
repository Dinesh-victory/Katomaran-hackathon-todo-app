import React, { useState } from 'react'
import '../styles/TaskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Graphic Design by 10am', completed: true },
    { id: 2, text: 'Playing football by 12pm', completed: false },
    { id: 3, text: 'Going to the market by 2pm', completed: false },
    { id: 4, text: 'Going for bicycle rides 6pm', completed: false }
  ])

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <article className="task-list">
      <header className="task-list__header">
        <h3 className="task-list__title">Daily Task</h3>
        <button className="task-list__menu">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-06/UXo1DyZ5gS.svg" 
            alt="Menu" 
            className="task-list__menu-icon"
          />
        </button>
      </header>

      <ul className="task-list__items">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <button 
              className={`task-item__checkbox ${task.completed ? 'task-item__checkbox--completed' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed && <span className="task-item__checkmark">✓</span>}
            </button>
            <span className={`task-item__text ${task.completed ? 'task-item__text--completed' : ''}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="task-list__progress">
        <div className="task-list__progress-bar"></div>
      </div>
    </article>
  )
}

export default TaskList
