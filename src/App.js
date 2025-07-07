// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Models from './Pages/Models';
import Team from './Pages/Team';
import TestimonialsPage from './Pages/TestimonialsPage';
import SignIn from './components/SignIn';
import Register from './components/Register'
// in App.js or index.js
import './styles/styles.scss';
import './dist/styles.css';
import './dist/styles.css.map';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/models" element={<Models />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/signin" element={<SignIn/>} />
       <Route path="/register" element={<Register/>} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;
