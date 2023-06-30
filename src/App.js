import logo from './logo.svg';
import './App.css';
//import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { useRef } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Introduction from './introduction';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Introduction/>
    </div>
  );
}

export default App;
