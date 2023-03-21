import React from "react";
import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [message,setMessage]= useState(false)
    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();

        //emailjs integration
       emailjs.sendForm('service_oa3o3ep', 'myPortfolio', form.current, 'swIG7ERJ9-O-fyOb7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
        }); 

        e.target.reset();
        setMessage(true)
    }
    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}