import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/about" element={<><Navbar /><About /></>} />
      <Route path="/blogs" element={<><Navbar /><Blog /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /></>} />
      </Routes>
    </Router>
  );
}

export default App;
