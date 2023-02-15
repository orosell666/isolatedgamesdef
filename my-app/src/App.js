import React from "react";

import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';

import Home from "./pages/home";
import BeTheStar from "./pages/bethestar";
import Travellers from "./pages/travellers";





function App() {
  return (
    <div className="App">
      <BrowserRouter  >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bethestar" element={<BeTheStar />} />
          <Route path='/travellers' element={<Travellers/>} />
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
