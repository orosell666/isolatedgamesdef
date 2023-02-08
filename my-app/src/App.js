import React from "react";

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar.js";
import Home from "./pages/home";
import Contact from "./pages/contact";



function App() {
  return (
    <div className="App">
      <Router >
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      
         
    </Routes>  
    </Router>
    </div>
  );
}

export default App;
