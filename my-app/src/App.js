import React from "react";

import './styles/App.css';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/prova";
import Home from "./pages/home";
import BeTheStar from "./pages/bethestar";
import Travellers from "./pages/travellers";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Job1 from "./pages/job1";
import Job2 from "./pages/job2";






function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/" >
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bethestar" element={<BeTheStar />} />
          <Route path='/travellers' element={<Travellers/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/job1' element={<Job1/>} />
          <Route path='/job2' element={<Job2/>} />

      </Routes> 
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
