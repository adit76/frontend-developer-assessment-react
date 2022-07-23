import React from 'react';
import logo from './logo.png';
import './App.css';

import FormPage from './Pages/FormPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <FormPage />
    </div>
  );
}

export default App;
