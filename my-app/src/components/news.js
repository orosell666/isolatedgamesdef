import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import screenshot from "../images/screenshot_7.jpg";
import downArrow from "../images/Icon_Down.png";
import screenshot3 from "../images/157.jpg";
;
const News = () => {
    return(
        <div className="textColor1 game1splash top-0 text-center " id="scrollspyHeading2" >
            <h1 className=" mb-5  mt-5 ">NEWS</h1>
            <div className="container-fluid col-lg-6 justify-content-start mb-5  ">
                
            <div className="card mt-5 rounded-3 w-100 ">
                <div className="row g-0">
                 <div className=" d-flex">
                <img src={screenshot} className="img-fluid d-none d-sm-block  col-4  p-2" />
                <div className="card-body ">
                <h2 className="card-header"><ins>New version for the game</ins></h2>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn moreBtn textColor1 col-2 me-3" >
                       More...
                        </button></div></div>
                    
                </div> 
                
                </div>
               
            </div>
            
            <div className="card mt-2 rounded-3 w-100">
                <div className="row g-0">
                 <div className=" d-flex">
                <img src={screenshot} className="img-fluid d-none d-sm-block  col-4  p-2" />
                <div className="card-body ">
                <h2 className="card-header"><ins>New version for the game</ins></h2>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn moreBtn textColor1 col-2 me-3" >
                       More...
                        </button></div>
                    
                </div> 
                
                </div>
               
            </div></div>
            
            <div className="card mt-2 rounded-3 mb-5 w-100 col-md-8">
                <div className="row g-0">
                 <div className=" d-flex">
                <img src={screenshot} className=" d-none d-sm-block  col-4  p-2" />
                <div className="card-body col-sm-5">
                <h2 className="card-header"><ins>New version for the game</ins></h2>
                    <p className="card-text  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn moreBtn textColor1 col-2 me-3" >
                       More...
                        </button></div></div>
                    
                </div> 
                
                </div>
               
            </div></div>

            
            <div className="container align-items-center">
                
                    <img src={downArrow}  width={70} height={70}/>
                
            </div>
            
            
           
               
        </div>
    )
}
export default News;