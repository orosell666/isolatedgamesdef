import React from "react";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Game1 from '../components/game1';
import Game2 from '../components/game2';

function Home() {
    return (
      <div className="App">
        
        <div className="App-header d-flex flex-row  ">
          <Game1 />
          <Game2 />
          </div>
          
           
      
      </div>
    );
  }
  
  export default Home;
  