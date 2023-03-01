import React from "react";
import "../styles/index.css"

const Contact = () => {
    return(
        <div className="textColor1 sectionStyle pt-5 contactBG "  >
            <h1 className=" pt-5">CONTACT</h1>
           
            <div className="container mb-3 text-start col-8 contact">
  <label for="exampleFormControlInput1" className="form-label ">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
  <label for="exampleFormControlInput1" className="form-label mt-3">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label mt-3 contact">Comment or Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

      </div>
      <div>
      <button type="submit" className="btn mt-4 steamBtn col-3">Submit</button>
        </div> </div> 
      
   
    )
}
export default Contact;