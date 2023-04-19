import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import gameImage1 from "../images/SliderBetween.png";
import gameImage2 from "../images/SliderTravellerRest.png"; 


const Game1 = () => {

    return (
        <div className="" id="scrollspyHeading1">
            <div className="container col-lg-8 pt-5 mb-2 rounded-2 ">
                <div className="fondoCarousel1  ">
        <div id="carouselExampleIndicators" className="carousel  slide  mb-1" data-bs-ride="carousel">
  
  <div className="carousel-inner container ">
    <div className="carousel-item active">
    
    
      <img src={gameImage1} class="d-block w-100" alt="..." />
      <div className="overlay">
      <div className="col-5 text-center p-3 float-start ">      <p className="gametitle">Between the Stars</p>
      <p className="gametext ">The Galaxy is in danger! Peace is under threat from the Children of the Sun, and only one captain is able to stop them. Live your own adventure through hundreds of events and fight your enemies in fast-paced real-time battles! </p>
      <Link to="/bethestar"><button type="button" className="btn moreBtn rounded-4 btn-sm textColor1 col mx-auto gametext" >
                       More Information...
                        </button></Link>
      </div>
    </div></div>
    <div className="carousel-item">
    
      <img src={gameImage2} class="d-block w-100" alt="..." />
      <div className="overlay justify-content-end">
      <div className="col-5 text-center  p-3 float-end">      <p className="gametitle">Travellers Rest</p>
      <p className="gametext">A new tavern keeper has arrived in the kingdom! Craft dozens of varied recipes and manage your resources to get the most out of each ingredient – build, explore and take your tavern to the top in this new adventure! </p>
      <Link to="/travellers"><button type="button" className="btn moreBtn rounded-4 btn-sm textColor1 col mx-auto gametext" >
                       More Information...
                        </button></Link>
      </div>
    </div>
    </div>
    
  </div>
  
  <button className="carousel-control-prev position-absolute top-50 start-0 translate-middle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
    <span  className="carousel-control-prev-icon" aria-hidden="true" >
      
    </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next position-absolute top-50 start-100 translate-middle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" width={40} height={40}></span>
    <span className="visually-hidden">Next</span>
  </button>
  <div className="row carousel-indicators col-sm-4 mx-auto">
    <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active col " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="col" aria-label="Slide 2"></button>
    
  </div>
</div></div>

           
        </div></div>

        )

}

export default Game1;
