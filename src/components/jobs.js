import React from "react";
import "../styles/index.css";
import LanguageIcon from "../images/Icon_Language.png";
import LocationIcon from "../images/Icon_Location.png";
import ClockIcon from "../images/Icon_Clock.png";
import { Link } from "react-router-dom";

const Jobs = ()=> {

    return(
        <div className="textColor1 splash3 text-center  pt-3 " id="scrollspyHeading6">
            <h1 className=" mb-5 pt-5">WORK WITH US</h1>
            <div className="container d-flex justify-content-center pb-5">
            <div className="card col-sm-5  ">
            <h2 className="card-header border-0 pt-4"><ins>Programmer Online Multiplayer </ins></h2>
                   
                
                <div className="card-body">
                    <span ><img src={LocationIcon} className="icon" />  Remote  </span>
                     <span ><img src={ClockIcon} className="icon" />  Full Time  </span>
                <span ><img src={LanguageIcon} className="icon"/>  Spanish  </span>
                <div>
                <Link to="/job2"><button type="button" className="btn moreBtn textColor1 col-md-3 mt-3" >
                       Apply
                        </button></Link></div>
                    
                   
                    
                </div>
            </div>
            <div className="card  col-sm-5  ms-3">
            <h2 className="card-header border-0 pt-4"><ins>Pixel Artist</ins></h2>
                   
                
                <div className="card-body">
                    <span ><img src={LocationIcon} className="icon" />  Remote  </span>
                     <span ><img src={ClockIcon} className="icon" />  Full Time  </span>
                <span ><img src={LanguageIcon} className="icon"/>  Spanish  </span>
                <div>
                <Link to="/job1"><button type="button" className="btn moreBtn textColor1 col-md-3 mt-3" >
                       Apply
                        </button></Link></div>
                    
                   
                    
                </div>
            </div>
            </div>
        </div>
    )
}
export default Jobs;