import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './Calendar.css';

const defaultTasks = ['Behaviour', 'Homework', 'Chores'];
const defaultTitle = "Child's Pocket Money Tracker";

const Calendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [tasks, setTasks] = useState<string[]>(() => JSON.parse(localStorage.getItem('tasks') || JSON.stringify(defaultTasks)));
  const [title, setTitle] = useState(() => localStorage.getItem('title') || defaultTitle);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newTasks, setNewTasks] = useState(tasks.join(', '));

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('title', title);
    document.title = title; // Update the document title dynamically
  }, [tasks, title]);

  const saveSettings = () => {
    setTitle(newTitle);
    setTasks(newTasks.split(',').map(task => task.trim()).filter(task => task));
    setIsSettingsOpen(false);
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const startDayOffset = (new Date(selectedYear, selectedMonth, 1).getDay() + 6) % 7;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 21 }, (_, i) => 2025 + i);

  return (
    <div className="calendar">
      <div className="header">
        <h1>{title}</h1>
        <button className="button is-primary no-print" onClick={() => setIsSettingsOpen(true)}>Settings</button>
      </div>
      <div className="date-selectors is-flex is-justify-content-flex-start">
        <div className="select">
          <span className="print-only">{months[selectedMonth]}</span>
          <select
            className="no-print"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="select ml-2">
          <span className="print-only">{selectedYear}</span>
          <select
            className="no-print"
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
      {isSettingsOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setIsSettingsOpen(false)}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Settings</p>
              <button className="delete" aria-label="close" onClick={() => setIsSettingsOpen(false)}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tasks (comma-separated)</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={newTasks}
                    onChange={(e) => setNewTasks(e.target.value)}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <div className="buttons">
                <button className="button is-success" onClick={saveSettings}>Save</button>
                <button className="button" onClick={() => setIsSettingsOpen(false)}>Cancel</button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
