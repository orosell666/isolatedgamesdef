import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import screenshot from "../images/screenshot_7.jpg";
import newsImg1 from "../images/1-Roadmap.png";
import newsImg2 from "../images/2-LocalCoop.png";
import newsImg3 from "../images/3-BTSDevelopmentUpdate.png";
import newsImg4 from "../images/4-christmas_banner.png";
import newsImg5 from "../images/5-Halloween.png";
import newsImg6 from "../images/6-WorldAndBirds.png";

import downArrow from "../images/Icon_Down.png";
import screenshot3 from "../images/157.jpg";
;
const News = () => {
    
   
    return(
        <div className="textColor1 game1splash top-0 text-center img-fluid " id="scrollspyHeading2" >
            <h1 className=" mb-3  titlePosition ">NEWS</h1>
            <div className="container-fluid col-lg-7 justify-content-start mb-5 fs-5 ">
             <div id="carouselExampleControls" class="carousel slide"   data-interval="false" data-wrap="false">
             <div className="carousel-inner" >
                
                <div className="carousel-item active" data-wrap="false">

                <div className=" card mt-5 rounded-3 w-100 ">
                <div className="row g-0">
                 <div className=" d-flex flex-wrap">
                <img src={newsImg1} className=" img-fluid col-md-5  col-sm-12   pt-3 ps-3 pb-3   newsImg "   />
                <div className="card-body  col-md-7  col-sm-12 col-7 ">
                <h2 className="card-header border-white fs-4">Travellers Rest Roadmap Announcement! </h2>
                    <p className="card-text mt-2 text-start">Today, we bring you something you have been asking for a very long time: A roadmap! We wanted to share with you our progress using a more visual, direct approach, so from now on you can take a look at the previous updates and what is to come. </p>
                    <div className="row justify-content-end ">
                    <a href="https://store.steampowered.com/news/app/1139980/view/3644013628343910500 "><button type="button" className="btn moreBtn rounded-4 btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                       More...
                        </button></a></div></div>
                    
                </div> 
                
                </div>
               
            </div>
            
            <div className="card mt-2 rounded-3 w-100">
                <div className="row g-0">
                    <div className=" d-flex flex-wrap">
                        <img src={newsImg2} className=" img-fluid col-md-5  col-sm-12 pt-3 ps-3 pb-3   newsImg" />
                            <div className="card-body  col-md-7  col-sm-12 col-7">
                                <h2 className="card-header border-white fs-4">Local Co-op Update - v0.5.5 </h2>
                                    <p className="card-text mt-2  text-start">A new update for Travellers Rest is here! In this update we have rebuilt the interface navigation system to fix the problems in the local co-op mode. We have also added a new area with new characters.  </p>
                                    <div className="row justify-content-end">
                                    <a href="https://store.steampowered.com/news/app/1139980/view/3654143558201046988 "><button type="button" className="btn moreBtn btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                                        More...
                                        </button></a>
                                    </div>
                            </div> 
                    </div>
                </div>
            </div>
            
            <div className="card mt-2 rounded-3 w-100 col-md-8">
                <div className="row g-0">
                 <div className=" d-flex flex-wrap">
                <img src={newsImg3} className="img-fluid col-md-5  col-sm-12 pt-3 ps-3 pb-3   newsImg" />
                <div className="card-body  col-md-7  col-sm-12 col-7">
                <h2 className="card-header border-white fs-4">Between the Stars Development Update </h2>
                    <p className="card-text mt-2 text-start">In this announcement, we want to update you and give you explanations about the future of the game. We will try to answer the doubts you have had during this time. </p>
                    <div className="row justify-content-end">
                    <a href="https://store.steampowered.com/news/app/727130/view/3607977852727515247 "><button type="button" className="btn moreBtn btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                       More...
                        </button></a></div></div>
                    
                </div> 
                
                </div>
               
            </div></div>
            <div className="carousel-item" data-interval="false" data-wrap="false">

            <div className=" card mt-5 rounded-3 w-100">
                <div className="row g-0">
                    <div className=" d-flex flex-wrap">
                        <img src={newsImg4} className="img-fluid col-md-4  col-sm-12 pt-3 ps-3 pb-3   newsImg" />
                            <div className="card-body  col-md-7  col-sm-12 col-7">
                                <h2 className="card-header border-white fs-4">Christmas Update - v0.5.4 </h2>
                                    <p className="card-text mt-2 text-start">Hello innkeepers! We have just released the new update for Travellers Rest, this update adds a new map, new characters and more. It also triggers this year's Christmas event.  </p>
                                    <div className="row justify-content-end">
                                    <a href="https://store.steampowered.com/news/app/1139980/view/3619235654235179640 "><button type="button" className="btn moreBtn btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                                        More...
                                        </button></a>
                                    </div>
                            </div> 
                    </div>
                </div>
            </div>
            <div className=" card mt-2 rounded-3 w-100">
                <div className="row g-0">
                    <div className=" d-flex flex-wrap">
                        <img src={newsImg5} className="img-fluid col-md-5  col-sm-12 pt-3 ps-3 pb-3   newsImg" />
                            <div className="card-body  col-md-7  col-sm-12 col-7">
                                <h2 className="card-header border-white fs-4">Halloween Event – v0.5.3 </h2>
                                    <p className="card-text mt-2 text-start">Halloween event has already started! During the event, you will be able to enjoy a spookier atmosphere, there will be new quests to complete, new recipes, and you will be able to get exclusive Halloween items. </p>
                                    <div className="row justify-content-end">
                                    <a href="https://store.steampowered.com/news/app/1139980/view/3546047018701585155 "><button type="button" className="btn moreBtn btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                                        More...
                                        </button></a>
                                    </div>
                            </div> 
                    </div>
                </div>
            </div>
            <div className=" card mt-2 rounded-3 w-100">
                <div className="row g-0">
                    <div className=" d-flex flex-wrap">
                        <img src={newsImg6} className="img-fluid col-md-5  col-sm-12 pt-3 ps-3 pb-3   newsImg" />
                            <div className="card-body  col-md-7  col-sm-12 col-7">
                                <h2 className="card-header border-white fs-4">World & Birds Update - v0.5.2.0 </h2>
                                    <p className="card-text mt-2 text-start ">We've just released a new major update for Travellers Rest! This new update adds the new bird mechanics, a world expansion with new zones, the first NPC, achievements, a new UI and more! </p>
                                    <div className="row justify-content-end">
                                    <a href="https://store.steampowered.com/news/app/1139980/view/3265696673567480795 "><button type="button" className="btn moreBtn btn-sm textColor1  me-3 fs-5 mb-3 position-absolute bottom-0 end-0" >
                                        More...
                                        </button></a>
                                    </div>
                            </div> 
                    </div>
                </div>
            </div></div></div>
            <button className="carousel-control-prev  position-absolute top-50 start-0 translate-middle overlay" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next position-absolute top-50 start-100 translate-middle" type="button"data-bs-target="#carouselExampleControls" data-bs-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
        

            
           
            
            
           
            </div> </div>      
        </div>
    )
}
export default News;