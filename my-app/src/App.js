import React from "react";

import './styles/App.css';
import './styles/index.css';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Footer from "./components/footer";
import Home from "./pages/home";
import BeTheStar from "./pages/bethestar";
import Travellers from "./pages/travellers";
import Navbar from "./components/navbar";






function App() {
  return (
    <div className="App">
      <BrowserRouter  >
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bethestar" element={<BeTheStar />} />
          <Route path='/travellers' element={<Travellers/>} />
      </Routes> 
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
