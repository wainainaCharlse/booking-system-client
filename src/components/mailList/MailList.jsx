import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./mailList.css"
const MailList = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const params = Object.fromEntries(formData.entries());

    emailjs
      .sendForm('service_amkq1ym', 'template_1qwabcn', form.current, 'w0Ice4zAuJmikq-4F')
      .then((result) => {
        console.log(result.text);
        alert('Success! Youve Subscribed.');
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Error! Failed to send email.');
      });
  };

  return (
    <div className="mail">
    <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
   
      <div className="mailInputContainer"> 
      <form ref={form} onSubmit={sendEmail}>
 
      <input type="email" name="user_email" placeholder="Your Email" required />
      <button >Subscribe</button>
      
    </form>
    </div>
    </div>
  );
};

export default MailList;