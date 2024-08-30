import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import AllBlog from './Components/AllBlogs';
import ScrollUp from './Components/ScrollUp';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
}

function RouteSwitch() {
  const location = useLocation();
  const isNavbarVisible = location.pathname !== '/AllBlog';

  return (
    <>
      {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="blog"><Blog /></div>
            <div id="contact"><Contact /></div>
            <div id="footer"><Footer /></div>
          </>
        } />
        <Route path="/AllBlog" element={<AllBlog />} />
      </Routes>
      <ScrollUp />
    </>
  );
}

export default App;
