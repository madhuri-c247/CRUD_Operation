import React from 'react';
import './App.css';
import Crud from './components/Crud.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Crud/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
