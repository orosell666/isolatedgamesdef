import React from "react";
import "../styles/index.css";
import '../styles/App.css';
import { Link } from "react-router-dom";
import  gameBanner  from "../images/Game_BTS.png";
import LogoBTS from "../images/logo_transparent.png";
import screenshot3 from "../images/157.jpg";
import screenshot6 from "../images/124.jpg";
import screenshot7 from "../images/137.jpg";
import screenshot8 from "../images/154.jpg";
import steamLogo from "../images/steamLogo.png";


import { Player } from 'video-react';





const BeTheStar = () => {

    return(
        <div className="container-fluid ">
            <div className="banner-area img-fluid ">
                <img src={gameBanner} className="background-image gameBTSbg col-12" /><img className="overlay col-3 img-fluid" src={LogoBTS} /><Link to="https://store.steampowered.com/cart/"></Link>
            </div>
            <div className="container-fluid top-0 justify-content-center">
            <div className="gameBTSsplash  ">
            <div className="container card pt-5 rounded-3  col-7 ">
                <div className="row g-0 mt-5">
                 <div className=" d-flex">
                <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                <div className="card-body col-6">
                <h3 className="card-header text-center ">Salva la Galaxia</h3>
                    <p className="card-text  text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    
                </div> 
                
                </div>
               
           
            
                <div className="row g-0 mt-5">
                 <div className=" d-flex">
                
                <div className="card-body col-6 ">
                <h3 className="card-header text-center ">Salva la Galaxia</h3>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                </div> 
                
                </div>
                <div className="row g-0">
                 <div className=" d-flex">
                <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                <div className="card-body col-6">
                <h3 className="card-header text-center ">Salva la Galaxia</h3>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    
                </div> 
                
                </div>
               
           
            
                <div className="row g-0 mt-5">
                 <div className=" d-flex">
                
                <div className="card-body col-6">
                <h3 className="card-header text-center ">Salva la Galaxia</h3>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                </div> 
                
                </div>
               
            </div></div> </div>

            
        <div className="container-fluid col-lg-6 mb-5">
        <div id="carouselExampleIndicators" class="carousel slide pb-5 mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={screenshot6} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={screenshot7} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={screenshot8} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
        
        </div>


    )
}
export default BeTheStar;