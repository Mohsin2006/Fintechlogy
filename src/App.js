import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Aboutus from './components/Aboutus/Aboutus'
import Contactus from './components/Contactus/Contactus'
import Technology from './components/Technology/Technology'
import Fintech from './components/Fintech/Fintech'
import Blockchain from './components/Blockchain/Blockchain'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div className='text-center'>
     
      <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/fintech" element={<Fintech />} />
        <Route path="/blockchain" element={<Blockchain />} />

      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App

