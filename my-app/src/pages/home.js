import React from "react";
import Game1 from '../components/game1';
import News from "../components/news";
import Jobs from "../components/jobs";
import Contact from "../components/contact";



function Home() {
    return (
      <div>
      <div  className="bgimg1">
       <Game1  id="scrollspyHeading1"/><News />
      </div>
        
        <Jobs />
        <Contact />
        </div>
          
           
      
      
    );
  }
  
  export default Home;
  