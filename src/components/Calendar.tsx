import React from 'react';
import './Calendar.css';

const daysInMonth = 28; // February 2025
const tasks = ['Behaviour', 'Homework', 'Chores'];

const Calendar: React.FC = () => {
  const startDayOffset = 5; // February 2025 starts on a Saturday (0-based index for days)

  return (
    <div className="calendar">
      <h1>Child’s Pocket Money Chart</h1>
      <h2>February 2025</h2>
      <div className="calendar-grid">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
          <div key={day} className="calendar-cell header-cell reduced-height">
            {day}
          </div>
        ))}
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-cell empty-cell"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i} className="calendar-cell">
            <div className="date">{i + 1}</div>
            {tasks.map((task) => (
              <div key={task}>
                <input type="checkbox" id={`${task}-${i + 1}`} />
                <label htmlFor={`${task}-${i + 1}`}>{task}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
