import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import FormPage from './Pages/FormPage';
import ListPage from './Pages/ListPage';
import Header from './Components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
