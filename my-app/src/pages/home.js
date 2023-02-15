import React from "react";
import Game1 from '../components/game1';
import News from "../components/news";
import Jobs from "../components/jobs";
import Contact from "../components/contact";
import Navbar from "../components/navbar";



function Home() {
    return (
      <div  >
       
      <Navbar />
      
      <div id="scrollspyHeading1"></div>
        <Game1 />
        <News />
        <Jobs />
        <Contact />
          
           
      
      </div>
    );
  }
  
  export default Home;
  