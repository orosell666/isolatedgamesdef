import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fqn1nm7', 'template_2v2dw99', form.current, 'o674EPVErU5dRxaok')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     })};

  return (
    <div className="container  pt-5  col-lg-5 col-sm-7 contact card cardshade  jobpos ">
    <form ref={form} onSubmit={sendEmail} className='fs-4'>
      <label>Name</label>
      <input type="text" name="user_name" className="form-control border-0 textColor1" id="exampleFormControlInput1" placeholder="Enter your name" />
      <label>Email address</label>
      <input type="email" name="user_email" className="form-control border-0 textColor1" id="exampleFormControlInput1" placeholder="Enter a valid email address" />
      <label>Message</label>
      
      <textarea name="message" className="form-control border-0 textColor1" id="exampleFormControlTextarea1" rows="4" placeholder="Enter your message"></textarea>
       
       
      <div className="text-end ">
      <button type="submit" className="btn mt-3  moreBtn mb-4 col-lg-2 col-sm-4 textColor1">Submit</button>
        </div></form>
     
   
    </div>
  );
};
export default ContactUs1 ;