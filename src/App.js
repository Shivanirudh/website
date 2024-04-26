import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Background/>
        <Routes>
          <Route exact path="/website" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
