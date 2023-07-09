import React from "react";
import "../styles/index.css"
import ContactUs1 from "../components/mailformsimple";

const Contact = () => {
    return(
        <div className="textColor1 sectionStyle pt-5 contactBG "  >
            <div className="container mb-3  col-5 ">
            <h1 className="text-start pt-5">CONTACT</h1></div>
           
            <ContactUs1 />  

            </div>
      
   
    )
}
export default Contact;