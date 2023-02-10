import React from "react";
import "../index.css";
import screenshot from "../screenshot_7.jpg";
import screenshot2 from "../screenshot_2.jpg";
import screenshot3 from "../157.jpg";
;
const News = () => {
    return(
        <div className="textColor1 sectionStyle pt-5 mt-5" id="scrollspyHeading2" >
            <h1 className=" pt-5">NEWS</h1>
            <div className="container justify-content-start">
            <div className="card bg-dark mt-5">
                <div className="row g-0">
                 <div className="col-8">
                <div className="card-body text-start">
                    <h3 className="card-title">New version for the game</h3>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div></div>  
                <div className="col-4">
                <img src={screenshot} className="img-fluid" /></div>
                
                </div>
            </div>
            <div className="card bg-dark mt-2">
                <div className="row g-0">
                 <div className="col-8">
                <div className="card-body text-start">
                    <h3 className="card-title">New version for the game</h3>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div></div>  
                <div className="col-4">
                <img src={screenshot2} className="img-fluid" /></div>
                
                </div>
            </div>
            <div className="card bg-dark mt-2">
                <div className="row g-0">
                 <div className="col-8">
                <div className="card-body text-start">
                    <h3 className="card-title">New version for the game</h3>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div></div>  
                <div className="col-4">
                <img src={screenshot3} className="img-fluid" /></div>
                
                </div>
            </div>
            <div className="card bg-dark mt-2">
                <div className="row g-0">
                 <div className="col-8">
                <div className="card-body text-start">
                    <h3 className="card-title">New version for the game</h3>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div></div>  
                <div className="col-4">
                <img src={screenshot3} className="img-fluid" /></div>
                
                </div>
            </div>
           
        </div>    
        </div>
    )
}
export default News;