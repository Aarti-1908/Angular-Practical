Assignment 12: To-Do List (React)
====================================

// App.js
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (!input.trim()) return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex].text = input;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, done: false }]);
    }
    setInput('');
  };

  const toggleDone = (i) => {
    const updated = [...tasks];
    updated[i].done = !updated[i].done;
    setTasks(updated);
  };

  const editTask = (i) => {
    setInput(tasks[i].text);
    setEditIndex(i);
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, idx) => idx !== i));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      <ul style={{ listStyle: 'none' }}>
        {tasks.map((t, i) => (
          <li key={i}>
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <button onClick={() => toggleDone(i)}>Done</button>
            <button onClick={() => editTask(i)}>Edit</button>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
