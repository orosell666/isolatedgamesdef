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
            <div className=" banner-area img-fluid ">
            <div className="d-flex">
              <div className="row g-0 ">
                <div className="videoWrapper  "><div>
                <img src={gameBanner} className="background-image gameBTSbg " /></div></div>
        <div className="overlay">
        <div className="videoPosition col-6">
        <iframe className="mt-5 mx-auto  " width="500" height="300" src="https://www.youtube.com/embed/EUXJnueIiPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe></div>
        <div className=" container logoBTSPosition mt-5">
        <div className="text-center">
        <img className=" col-4 justify-content-center" src={LogoBTS} /></div>
        <div className="container pe-5 text-center col-10 ">
          <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut velit at quam dictum vehicula eget eget tortor. Fusce placerat metus tortor, et aliquam eros viverra non. Fusce a laoreet tellus, sit amet commodo est. Aenean accumsan egestas mauris, vitae imperdiet purus lobortis non. Maecenas porttitor efficitur erat, non tristique tortor.  </p>
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
          </div>
            <div className=" top-0 justify-content-center">
            <div className="gameBTSsplash  ">
            <div className="container card pt-5 p-5 rounded-3  col-7 ">
                
                <div className="row g-0 mt-5 pt-5">
                  <div className=" d-flex">
                    <div className="card-body col-6 ">
                      <h3 className="card-header text-center ">Salva la Galaxia</h3>
                      <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                      <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                  </div> 
                </div>
                
                <div className="row g-0 mt-5">
                  <div className=" d-flex">
                  <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                    <div className="card-body col-6">
                      <h3 className="card-header text-center ">Salva la Galaxia</h3>
                      <p className="card-text  text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                  </div> 
                </div>
                
                <div className="row g-0 mt-5 ">
                  <div className=" d-flex">
                    <div className="card-body col-6">
                      <h3 className="card-header text-center ">Salva la Galaxia</h3>
                      <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                  </div> 
                </div>
               
                <div className="row g-0 mt-5 mb-5">
                  <div className=" d-flex">
                  <img src={screenshot3} className="img-fluid d-none d-sm-block  col-6  p-2" />
                    <div className="card-body col-6">
                      <h3 className="card-header text-center ">Salva la Galaxia</h3>
                      <p className="card-text  text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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