import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
              <Navbar/>
                <Routes>
                    <Route index element={<Main />}/>
                    <Route path="/about" element={<AboutUs />}/>
                    <Route path="contact" element={<Contact />}/>
                </Routes>
                <Footer/>
        </Router>
    </div>
  );
}

export default App;
