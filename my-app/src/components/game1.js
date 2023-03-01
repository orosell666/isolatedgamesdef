import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import gameImage1 from "../images/SliderBetween.png";
import gameImage2 from "../images/SliderTravellerRest.png"; 


const Game1 = () => {

    return (
        <div className="" id="scrollspyHeading1">
            <div className="container-fluid col-lg-6 pt-5  rounded-3">
                <div className="fondoCarousel1  ">
        <div id="carouselExampleIndicators" className="carousel  slide p-4 mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators ">
    <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Link to="/bethestar">
      <img src={gameImage1} class="d-block w-100" alt="..." /></Link>
    </div>
    <div className="carousel-item">
    <Link to="/travellers">
      <img src={gameImage2} class="d-block w-100" alt="..." /></Link>
    </div>
    
  </div>
  <button className="carousel-control-prev position-absolute top-50 start-0 translate-middle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next position-absolute top-50 start-100 translate-middle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>

           
        </div></div>

        )

}

export default Game1;
