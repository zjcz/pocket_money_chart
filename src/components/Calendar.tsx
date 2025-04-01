import React, { useState } from 'react';
import './Calendar.css';

const tasks = ['Behaviour', 'Homework', 'Chores'];

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const startDayOffset = (new Date(selectedYear, selectedMonth, 1).getDay() + 6) % 7; // Adjust for Sunday as the first day

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 21 }, (_, i) => 2025 + i);

  return (
    <div className="calendar">
      <h1>Child’s Pocket Money Chart</h1>
      <div className="date-selectors">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
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
