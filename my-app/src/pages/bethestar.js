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
import logoShame from "../images/RS_Youtube.png";
import logoSteam from "../images/Icon_STEAM.png";
import logoGOG from "../images/Icon_GOG.png";
import logoEPIC from "../images/Icon_EPIC.png";








const BeTheStar = () => {

    return(
        <div>
            <div className=" banner-area  ">
            <div className="d-flex flex-wrap">
              
                <div className="videoWrapper ">
                  <div><img src={gameBanner} className="background-image img-fluid " /></div>
                </div>
                <div className="overlay">
                  <div className="embed-responsive videoPosition  ">
                    <iframe className="col row embed-responsive-item embed-responsive-16by9" src="https://www.youtube.com/embed/EUXJnueIiPs" title="Between the Stars - Kickstarter Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <div className=" container logoBTSPosition mt-5 ">
                    <div className="text-center">
                      <img className=" col-6 justify-content-center img-fluid" src={LogoBTS} /></div>
                      <div className="container  text-center col-10 ">
                        <p className="fs-5">Between the Stars is a space action game with RPG elements where you will live the adventures of a captain and their crew to defend the Galaxy from a new and dangerous threat. Manage your resources and fight your enemies through more than 300 text events where every decision counts. </p>
                        <div className="d-flex  justify-content-center">
                          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoSteam} className=" "  width={50} height={50} /></a>
                          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoGOG} className="ms-2 me-2 "  width={50} height={50}/></a>
                          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoEPIC} className=" "  width={50} height={50}/></a>
                        </div>
                      </div>
                  </div>
                
              </div>
        
            </div>
          </div>
            <div className=" top-0 justify-content-center">
            <div className="gameBTSsplash  ">
            <div className="container card pt-5 p-5 rounded-3  col-7 ">
                
                <div className="row g-0 mt-5 pt-5">
                  <div className=" d-flex flex-wrap">
                    <div className="card-body col-lg-6  col-sm-12 col-6 ">
                      <h3 className="card-header text-center ">Defend the Galaxy: </h3>
                      <p className="card-text  text-start">Interplanetary peace is in danger and only one captain can save it. Take part in the Solar War by playing the main campaign and end the tyranny of the Children of the Sun before it is too late. </p>
                    </div>
                      <img src={screenshot3} className="img-fluid    col-lg-6  col-sm-12 p-2" />
                  </div> 
                </div>
                
                <div className="row g-0 mt-5">
                  <div className=" d-flex flex-wrap">
                  <img src={screenshot3} className="img-fluid col-lg-6  col-sm-12  p-2" />
                    <div className="card-body col-lg-6  col-sm-12 ">
                      <h3 className="card-header text-center ">Live your own adventure: </h3>
                      <p className="card-text  text-start ">Defend the Galaxy from the ruthless Children of the Sun or explore it through more than 300 events where every decision counts - meet dozens of characters and deal with all the dangers you will encounter on your adventure! </p>
                    </div>
                  </div> 
                </div>
                
                <div className="row g-0 mt-5 ">
                  <div className=" d-flex">
                    <div className="card-body col-6">
                      <h3 className="card-header text-center ">Master your ship: </h3>
                      <p className="card-text  text-start">Experience intense real-time battles and take on skilled enemies. Mastering your positioning and having the right equipment will give you a great advantage over your foes. </p>
                    </div>
                    <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                  </div> 
                </div>
               
                <div className="row g-0 mt-5 mb-5">
                  <div className=" d-flex">
                  <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                    <div className="card-body col-6">
                      <h3 className="card-header text-center ">Manage your resources: </h3>
                      <p className="card-text  text-start ">Customize your captain and your ship's resources to suit your way of playing. Finding the right balance between your equipment and your crew will be crucial to be victorious. Buy, sell, create... Everything is allowed for you to keep the Galaxy safe. </p>
                    </div>
                  </div> 
                </div>
               
           
            
                
               
            </div></div> </div>

       <div className="teambg pt-5 pb-5 " >   
        
        <div className="container-fluid col-lg-6 pt-5  rounded-3">
                <div className="fondoCarousel2  ">
               
        <div id="carouselExampleIndicators" className="carousel  slide p-3 mb-5" data-bs-ride="carousel" data-ride="carousel">
        
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
    <div className="carousel-item">
    
      <img src={screenshot3} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot7} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot8} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot3} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot6} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot7} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot8} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    
      <img src={screenshot3} class="d-block w-100" alt="..." />
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

</div>
</div> 
</div>

      <div id="thumbcarousel" className="carousel slide carousel-indicators1 col-lg-7 mx-auto fondoCarousel2 " data-interval="false">
        
        <div className="carousel-inner scroll">
          <div className="item active d-flex m-2">
            <div data-target="#carousel" data-slide-to="0" className="thumb "><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active thumbnail" aria-current="true" aria-label="Slide 1"><img src={screenshot6} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="1" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="thumbnail"><img src={screenshot7} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="2" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="thumbnail"><img src={screenshot8} className="d-block w-100" alt="..." /></button>
 </div>
            <div data-target="#carousel" data-slide-to="3" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="thumbnail" aria-current="true" aria-label="Slide 4"><img src={screenshot3} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="4" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className=" thumbnail" aria-current="true" aria-label="Slide 5"><img src={screenshot7} className="d-block w-100" alt="..." /></button></div>
          
            <div data-target="#carousel" data-slide-to="5" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className=" thumbnail" aria-current="true" aria-label="Slide 6"><img src={screenshot8} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="6" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" className=" thumbnail" aria-current="true" aria-label="Slide 7"><img src={screenshot3} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="7" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" className=" thumbnail" aria-current="true" aria-label="Slide 8"><img src={screenshot6} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="8" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" className=" thumbnail" aria-current="true" aria-label="Slide 9"><img src={screenshot7} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="9" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" className=" thumbnail" aria-current="true" aria-label="Slide 10"><img src={screenshot8} className="d-block w-100" alt="..." /></button></div>
            
            <div data-target="#carousel" data-slide-to="10" className="thumb "><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" className=" thumbnail" aria-current="true" aria-label="Slide 11"><img src={screenshot3} className="d-block w-100" alt="..." /></button></div>
            
          </div>
        </div>
       
        <a className="left carousel-control" href="#thumbcarousel" role="button" data-slide="prev"> <i class="fa fa-angle-left" aria-hidden="true"></i> </a> <a class="right carousel-control" href="#thumbcarousel" role="button" data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i> </a> 
        </div>
  

           
        
        
</div>
<div className="splash3Game pt-5  pb-5 text-center">
  
    <h1 className="mb-5 pt-5">Join our community!</h1>
    <div className="container-fluid col-4 ">
      <div className="card mt-5 rounded-3 w-100 justify-content-evenly ">
        <div className="row g-0 ">
        <div className=" d-flex ">
        <img src={logoShame} className="img-fluid  ms-3 p-2"  width={80} height={80} />
                
        
          <div className="card-body "><div className="row g-0">
        <div className=" d-flex">
          <div className="container">
                <h5 className="card-text  text-center">Shame/exposing/packing</h5>
                <p className="card-text"><small class="text-muted">3,308 Online</small></p></div>
                   
                    <Link><button type="button" className="btn moreBtn textColor1  ms-3 me-3 " >
                       Join
                        </button></Link></div></div></div></div></div>
    </div>
    </div>
 
</div>

</div>


    )
}
export default BeTheStar;