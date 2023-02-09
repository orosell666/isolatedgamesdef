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
      
      <div className="mt-5 pt-5 d-flex " id="scrollspyHeading1"></div>
        <div className="pt-5 d-flex flex-row  " >
          <Game1 />
          
        </div>
        <News />
        <Jobs />
        <Contact />
          
           
      
      </div>
    );
  }
  
  export default Home;
  