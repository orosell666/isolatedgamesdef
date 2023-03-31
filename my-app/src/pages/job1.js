import React from "react";
import Main from "../components/main"


const Job1 =()=> {
    return(
        <div className="">
            <Main />
            <div className=" jobSplash text-start">
                <div className="container-fluid card col-8 textBG ps-5 jobs border-0">
                <h2><strong>Pixel Artist</strong></h2>
                <p>Isolated Games is an independent studio in Barcelona. We are currently developing the games Between the Stars and Travellers Rest. We are looking for a pixel artist to work on Travellers Rest full-time. </p>
                <h4><strong>Minimum Requirements</strong></h4>
                <ul id="sample-ul">
                    <li>Professional experience developing video games. </li>
                    <li>Ability to create pixel art. </li>
                    <li>Knowledge of animation.</li>
                    <li>Knowledge of Photoshop y Aseprite.</li>
                    <li>Great drawing skills.</li>
                    <li>High level of spoken Spanish.</li>
                </ul>
                <h4>Desired Requirements</h4>
                <ul id="sample-ul">
                    <li>Ability to create concept art and illustrations.  </li>
                    <li>Knowledge of shaders and particle systems. </li>
                    <li>Eagerness to learn and take on new challenges. </li>
                    <li>Efficient and independent problem-solving.</li>
                    <li>Works well in teams and good communication. </li>
                   
                </ul>
                <h4>Responsbilities</h4>
                <ul id="sample-ul">
                    <li>Creating assets and 2D / pixel art. </li>
                    <li>Implementing art in Unity 3D. </li>
                    <li> Co-ordinating with the programmers. </li>
                    <li> Every now and then, making promotional art.</li>
                </ul>

                <h4>Benefits</h4>
                <ul id="sample-ul">
                    <li>Fully remote position. </li>
                    <li>Flexible working hours.</li>
                    <li>8-hour workday, no crunch.</li>
                    <li>Great workplace environment</li>
                    <li>Young and growing studio.</li>
                   
                </ul>
                </div>
                
            </div>
            <div className="jobBG " >
                <div className="pt-5 pb-5">
                    <h2 className="text-center mb-5 ">Apply Now!</h2>
            <div className="container  pt-5 col-7 contact card cardshade  jobpos">
  
  <input type="email" className="form-control border-0 textColor1" id="exampleFormControlInput1" placeholder="Enter youyr name" />
  
  <input type="email" className="form-control border-0" id="exampleFormControlInput1" placeholder="Enter a valid email address" />


  
  <textarea className="form-control border-0" id="exampleFormControlTextarea1" rows="4" placeholder="Enter your message"></textarea>


     
      <div className="text-end ">
      <button type="submit" className="btn mt-3  moreBtn mb-4 col-2 textColor1">Submit</button>
        </div> </div>
            </div></div>
        </div>

    )
}
export default Job1;