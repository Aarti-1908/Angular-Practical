Assignment 13: Calculator (React)
====================================

// App.js
import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (op === '+') setResult(a + b);
    if (op === '-') setResult(a - b);
    if (op === '*') setResult(a * b);
    if (op === '/') setResult(b !== 0 ? a / b : 'Error');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br /><br />
      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>*</button>
      <button onClick={() => calculate('/')}>/</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
