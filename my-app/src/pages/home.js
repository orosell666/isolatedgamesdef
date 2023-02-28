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
      <div className="bgimg2 ">
        <div className="container textColor1 text-center">
        <h1 className="">ABOUT US</h1>
        <p className="text-center">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tortor iaculis, venenatis sem vel, sollicitudin mi. Pellentesque ut sem ut libero elementum convallis quis a lectus. Suspendisse sit amet enim aliquam, tempor dui sit amet, placerat nibh. Aenean rhoncus condimentum feugiat. Nulla elementum gravida massa molestie condimentum. Nam egestas finibus lectus a semper. Vestibulum quis ultrices libero, at molestie lectus. Vivamus turpis lorem, tincidunt eget ornare sed, hendrerit ac nisi. Donec urna nisi, tempus tristique sem ut, viverra consectetur felis.</p>
<p className="text-center">
Vivamus faucibus rhoncus enim, vel elementum nulla. Phasellus ac nulla scelerisque, ornare nisi eu, consequat odio. Donec sed mattis enim. In ultrices auctor sem ut mattis. Integer id dolor ut odio dignissim accumsan. Fusce eget lectus urna. Suspendisse egestas varius velit nec euismod.</p>
<p className="text-center pb-5">
Mauris bibendum eleifend malesuada. Integer quam tortor, fringilla et laoreet in, convallis a mi. Donec sit amet elit pellentesque, pretium est vel, varius sapien. Fusce eleifend libero quis tortor pretium porta. Mauris tempus, magna nec dignissim blandit, orci ipsum ornare augue, ac vehicula massa mi eget ligula. Curabitur ornare ac elit vitae tincidunt. Sed nisl justo, convallis in mi vel, scelerisque laoreet turpis. Nam a tincidunt ligula. Sed quis elit felis. Nunc nec ligula congue, dictum mi nec, faucibus felis. Proin placerat, arcu vel convallis vestibulum, risus purus convallis sem, vitae pharetra magna odio sed diam. Quisque non elementum purus. Sed vitae magna nibh.</p>
        
        </div></div>
        <Contact />
        </div>
          
           
      
      
    );
  }
  
  export default Home;
  