Assignment 14: Digital Clock (React)
====================================

// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      <p>{time.toDateString()}</p>
    </div>
  );
}

export default App;
