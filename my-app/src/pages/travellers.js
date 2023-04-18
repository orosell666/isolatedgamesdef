import React from "react";
import "../styles/index.css";
import '../styles/App.css';
import { Link } from "react-router-dom";
import  gameBanner  from "../images/Game_Travellers.png";
import LogoTR from "../images/travellersRest-NewLogo5x.png";
import screenshot3 from "../images/157.jpg";
import screenshot6 from "../images/124.jpg";
import screenshot7 from "../images/137.jpg";
import screenshot8 from "../images/154.jpg";
import logoShame from "../images/RS_Youtube.png";
import logoSteam from "../images/Icon_STEAM.png";
import logoGOG from "../images/Icon_GOG.png";
import logoEPIC from "../images/Icon_EPIC.png";






const Travellers = () => {
    return(
        <div>
            <div className=" bannerarea  ">
            <div className="row g-0 ">
              <div className=" d-flex  flex-wrap-reverse">
                <div className="videoWrapper ">
                  <div><img src={gameBanner} className="gameBanner " />
                </div>
                <div className="overlay resize justify-content-center ">
                  <div className="container col-lg-6 col-md-10 ">
        <div className="embed videoPosition  justify-content-end me-5 ">
        <iframe className="col-md-12 col-lg-9 embed-item embed-16by9 videoSize "  src="https://www.youtube.com/embed/EUXJnueIiPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe></div></div>
        <div className=" justify-content-start   mt-3 mb-5 col-lg-6 col-md-10 ">
        <div className="container ">
        <div className="container text-center mt-5">
        <img className=" col-3 justify-content-center img-fluid" src={LogoTR} /></div>
        <div className="container  text-center col-7 ">
          <p className="fs-5">Craft, farm, build! In Travellers Rest you will have to use all the available tools to become the best tavern keeper in the kingdom. Create unique dishes and drinks to please your customers while you discover the world and its colorful characters. Take your establishment to the top in this exciting new adventure! </p>
          <div className="d-flex  justify-content-center">
          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoSteam} className=" "  width={50} height={50} /></a>
          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoGOG} className="ms-2 me-2 "  width={50} height={50}/></a>
          <a href="https://store.steampowered.com/app/727130/Between_the_Stars/"><img src={logoEPIC} className="mb-5 "  width={50} height={50}/></a>
</div>
        </div>
        </div></div>
        </div>
        </div>
        
            </div>
          </div></div>
          
            <div className="  justify-content-center">
            <div className="gameBTSsplash  ">
            <div className="mx-auto card pt-5  rounded-3  col-7">
                
                <div className="row g-0 mt-5 pt-5">
                <div className=" d-flex flex-wrap">
                    <div className="card-body col-lg-6  col-sm-12 col-6 ">
                      <h3 className="card-header text-center ">Your tavern, your rules: </h3>
                      <p className="card-text  text-start">Expand and manage your own fantasy tavern. Customize it with furniture and other decorative elements to improve your reputation. Do not stop until you have the tavern of your dreams! </p>
                    </div>
                      <img src={screenshot3} className="img-fluid    col-lg-6  col-sm-12 p-2" />
                  </div> 
                </div>
                
                <div className="row g-0 mt-5">
                <div className=" d-flex flex-wrap-reverse">
                  <img src={screenshot3} className="img-fluid    col-lg-6  col-sm-12 p-2" />
                    <div className="card-body col-lg-6  col-sm-12">
                      <h3 className="card-header text-center ">Tend to your customers: </h3>
                      <p className="card-text  text-start ">Hundreds of customers are waiting to be tended to - serve them a nice mug of beer or kick them out if they get cheeky! Earn mountains of gold and become the best tavern keeper in the whole kingdom. </p>
                    </div>
                  </div> 
                </div>
                
                <div className="row g-0 mt-5 ">
                <div className=" d-flex flex-wrap">
                    <div className="card-body col-lg-6  col-sm-12 col-6 ">
                      <h3 className="card-header text-center ">Create your own style: </h3>
                      <p className="card-text  text-start">Discover new recipes and create unique dishes and drinks to please your customers. Of course, you will have to get your hands on the best products to keep them satisfied – craft hundreds of items and furniture to take your establishment to the highest level! </p>
                    </div>
                    <img src={screenshot3} className="img-fluid    col-lg-6  col-sm-12 p-2" />
                  </div> 
                </div>
               
                <div className="row g-0 mt-5 mb-5">
                <div className=" d-flex flex-wrap-reverse">
                  <img src={screenshot3} className="img-fluid    col-lg-6  col-sm-12 p-2" />
                    <div className="card-body col-lg-6  col-sm-12">
                      <h3 className="card-header text-center ">Discover the world: </h3>
                      <p className="card-text  text-start ">The kingdom is full of colorful characters and things to do. Take a couple of days off and explore to discover all that this kingdom has to offer – you are sure to find something useful for your tavern on your journeys! </p>
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
            <div data-target="#carousel" data-slide-to="0" className="thumb border-0"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active thumbnail" aria-current="true" aria-label="Slide 1"><img src={screenshot6} className="d-block w-100" alt="..." /></button></div>
            <div data-target="#carousel" data-slide-to="1" className="thumb"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="thumbnail"><img src={screenshot7} className="d-block w-100 border-0" alt="..." /></button></div>
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
<div className=" splash3Game   pb-5 text-center">
  
    <h1 className="mb-5 pt-5">Join our community!</h1>
    <div className="container-fluid col-lg-4 col-md-6">
      <div className="card mt-5 rounded-3 w-100 justify-content-evenly ">
        <div className="row g-0 ">
        <div className=" d-flex ">
        <img src={logoShame} className="mt-3 mb-3  ms-3 "  width={80} height={80} />
                
        
          <div className="card-body ">
            <div className="row g-0">
        <div className=" d-flex">
          <div className="container ">
                <h5 className="card-text  text-center">Shame/exposing/packing</h5>
                <p className="card-text"><small class="text-muted">3,308 Online</small></p></div>
                   
                    <Link><button type="button" className="btn moreBtn textColor1  ms-3 me-3  " >
                       Join
                        </button></Link></div></div></div></div></div>
    </div>
    </div>
 
</div>

</div>

    )
}

    
export default Travellers;