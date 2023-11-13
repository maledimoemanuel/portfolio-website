import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';

import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} >
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
