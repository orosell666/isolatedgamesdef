import React from "react";
import Game1 from '../components/game1';
import News from "../components/news";
import Team from "../components/team";
import AboutUs from "../components/aboutus";
import Jobs from "../components/jobs";
import Main from "../components/main"



function Home() {
    return (
      <div>
      <div  className="">
        <Main />
       <Game1  id="scrollspyHeading1"/>
       <News />
      </div>
      
      <div className="bgimg2 ">
        <AboutUs />
       </div>
        <div className="teambg" id="scrollspyHeading4">
        <Team  />
        <Jobs id="scrollspyHeading5" />
        </div>
       
        </div>
          
           
      
      
    );
  }
  
  export default Home;
  