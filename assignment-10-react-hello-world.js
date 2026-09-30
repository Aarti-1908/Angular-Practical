Assignment 10: Hello World (React)
====================================

// App.js
import React from 'react';

function App() {
  return <h1>Hello World</h1>;
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
