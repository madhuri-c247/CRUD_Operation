import React from 'react';
import Nav from './components/nav.jsx';
import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';
import Trial from './components/Trial.jsx';
import './App.css';
import Crud from './components/Crud.jsx';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <Crud/>
      {/* <Trial/> */}
    </div>
  );
}

export default App;
