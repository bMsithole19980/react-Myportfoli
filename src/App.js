import logo from './logo.svg';
import './App.css';
//import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { useRef } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Introduction from './introduction';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Introduction/>
      <Projects/>
    </div>
  );
}

export default App;
