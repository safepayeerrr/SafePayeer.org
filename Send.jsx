import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const  SendMessageToUs = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qk628nb', 'template_9mz6eir', form.current, 'fTV1FqDpwSSfrHZDo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        
      };
    return ( <form ref={form} onSubmit={sendEmail} className="send">
        <br /><br />
        <h1 className="header-send">Send Quick Message</h1>
        <br /><br />
        <input className="input"  type="text" aria-label="Full-Name" name="user_name"  maxLength={100} aria-required="false" placeholder="Full Name" /><br /> <br />
        <input className="input" required type="text" aria-label="Email" name="user_email"  aria-required="true" placeholder="Email" /><br /><br />
        <textarea className="message" required  placeholder="Type Your Message " name="message" id="message" cols="30" rows="10"></textarea><br /><br />
    <button className="button-submit" value="Send"  type="submit">Send</button>
    
    </form> );
}

export default SendMessageToUs;