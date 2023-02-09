import React from "react";
import Game1 from '../components/game1';
import News from "../components/news";
import Jobs from "../components/jobs";
import Contact from "../components/contact";
import Navbar from "../components/navbar";



function Home() {
    return (
      <div className="App" >
       
      <Navbar />
      
       
        <div className="App-header d-flex flex-row  " id="scrollspyHeading1">
          <Game1 />
          
        </div>
        <News />
        <Jobs />
        <Contact />
          
           
      
      </div>
    );
  }
  
  export default Home;
  