import React from "react";
import "../styles/index.css";
import LanguageIcon from "../images/Icon_Language.png";
import LocationIcon from "../images/Icon_Location.png";
import ClockIcon from "../images/Icon_Clock.png";

const Jobs = ()=> {

    return(
        <div className="textColor1 splash3 text-center  pt-5 " id="scrollspyHeading3">
            <h1 className=" pt-5">WORK WITH US</h1>
            <div className="container d-flex justify-content-center">
            <div className="card bg-dark col-5 mt-5 ms-5 me-2">
            <h2 className="card-header"><ins>Pixel Artist</ins></h2>
                   
                
                <div className="card-body">
                    <span ><img src={LocationIcon} className="icon" />  Remote  </span>
                     <span ><img src={ClockIcon} className="icon" />  Full Time  </span>
                <span ><img src={LanguageIcon} className="icon"/>  Spanish  </span>
                <div>
                <button type="button" className="btn moreBtn textColor1 col-md-2 mt-3" >
                       Apply
                        </button></div>
                    
                   
                    
                </div>
            </div>
            <div className="card bg-dark col-5 mt-5 ms-2">
            <h2 className="card-header"><ins>Pixel Artist</ins></h2>
                   
                
                <div className="card-body">
                    <span ><img src={LocationIcon} className="icon" />  Remote  </span>
                     <span ><img src={ClockIcon} className="icon" />  Full Time  </span>
                <span ><img src={LanguageIcon} className="icon"/>  Spanish  </span>
                <div>
                <button type="button" className="btn moreBtn textColor1 col-2 mt-3" >
                       Apply
                        </button></div>
                    
                   
                    
                </div>
            </div>
            </div>
        </div>
    )
}
export default Jobs;