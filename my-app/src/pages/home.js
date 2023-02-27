import React from "react";
import Game1 from '../components/game1';
import News from "../components/news";
import Jobs from "../components/jobs";
import Contact from "../components/contact";



function Home() {
    return (
      <div  className="App-header ">
       
      
      
        
          <Game1  id="scrollspyHeading1"/>
        
      
        <News />
        <Jobs />
        <Contact />
          
           
      
      </div>
    );
  }
  
  export default Home;
  