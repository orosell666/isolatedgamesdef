import React from "react";

import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home";
import BeTheStar from "./pages/bethestar";
import Travellers from "./pages/travellers";
import Home2 from "./pages/home2";




function App() {
  return (
    <div className="App">
      <Router  >
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/bethestar" element={<BeTheStar />} />
      <Route path='/travellers' element={<Travellers/>} />
      <Route path='/home2' element={<Home2 />} />
      
      
         
    </Routes>  
    </Router>
    </div>
  );
}

export default App;
