import React from "react";
import "../styles/index.css"

const Contact = () => {
    return(
        <div className="textColor1 sectionStyle pt-5 contactBG "  >
            <div className="container mb-3  col-5 ">
            <h1 className="text-start pt-5">CONTACT</h1></div>
           
            <div className="container mb-5  col-5 contact card ">
  
  <input type="email" className="form-control border-0 textColor1" id="exampleFormControlInput1" placeholder="Enter youyr name" />
  
  <input type="email" className="form-control border-0" id="exampleFormControlInput1" placeholder="Enter a valid email address" />


  
  <textarea className="form-control border-0" id="exampleFormControlTextarea1" rows="4" placeholder="Enter your message"></textarea>


     
      <div className="text-end">
      <button type="submit" className="btn mt-3  moreBtn mb-4 col-2 textColor1">Submit</button>
        </div> </div>  </div>
      
   
    )
}
export default Contact;