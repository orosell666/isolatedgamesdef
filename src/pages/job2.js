import React from "react";
import Video from "../assets/hd22.mp4";
import ContactUs from "../components/mailform.js";


const Job2 =()=> {
    return(
        <div >
            <div className="negpad" >
            
                
            <div className="video-container parallax-container ">
            <video src={Video} autoPlay muted loop id="myVideo2"/>       
            </div>
                
        
           
          </div>
          
          <div className="  justify-content-center">
            <div className="gameBTSsplash  ">
            <div className="mx-auto card  pt-5 rounded-3  col-lg-7 col-md-10 ">
                <div className="m-5 pt-5 fs-4">
                <h2 className=""><strong>Programmer Online Multiplayer </strong></h2>
                <p className="jobfont ms-5">Isolated Games is an independent studio in Barcelona. We are currently developing the games Between the Stars and Travellers Rest. We are looking for a pixel artist to work on Travellers Rest full-time. </p>
                <p><strong>Minimum Requirements</strong></p>
                <ul id="sample-ul">
                    <li>At least 3 years of professional experience programming in Unity 3D.</li>
                    <li>Knowledge of C#.  </li>
                    <li>Knowledge of animation.</li>
                    <li>Knowledge of online multiplayer and optimization. </li>
                    <li>High level of spoken Spanish. </li>
                </ul>
                <p>Desired Requirements</p>
                <ul id="sample-ul">
                    <li>Wide knowledge of Unity 3D. </li>
                    <li>Knowledge of 2D art workflow (implementing animations, sprites, sprites…). </li>
                    <li>Basic knowledge of Photoshop. </li>
                    <li>Experience with 2D projects.</li>
                    <li>Experience porting to consoles. </li>
                    <li>Experiencia con sistema de control de versiones. </li>
                    <li>Eagerness to learn and take on new challenges. </li>
                    <li>Efficient and independent problem-solving. </li>
                    <li>Works well in teams and good communication. </li>
                    <li>A good level of English is a plus. </li>
                   
                </ul>
                <p>Responsbilities</p>
                <ul id="sample-ul">
                    <li>Programming new systems.</li>
                    <li>Help in the creation of the new online mode. </li>
                    <li>Optimization and upkeep of existing code.</li>
                    <li>Co-ordinating with the art team. </li>
                </ul>

                <p>Benefits</p>
                <ul id="sample-ul">
                    <li>Fully remote position. </li>
                    <li>Flexible working hours.</li>
                    <li>8-hour workday, no crunch.</li>
                    <li>Great workplace environment</li>
                    <li>Young and growing studio.</li>
                   
                </ul>
                </div></div>
                
            </div></div>
            <div className="jobBG " >
                <div className="pt-5 pb-5">
                    <h2 className="text-center mb-5  ">Apply Now!</h2>
            <ContactUs />
            </div></div>
        </div>

    )
}
export default Job2;