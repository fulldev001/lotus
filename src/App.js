import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './components/home/Home.js'
import About from './components/about/About.js'
import Contact from './components/contact/Contact.js'

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact"  element={<Contact />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
