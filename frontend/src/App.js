import React, {useState, useEffect} from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {

  const [activeComponent, setActiveComponent] = useState('hero');
  
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
