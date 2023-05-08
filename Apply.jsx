import React, {useState} from "react";
import gmail from './gmail.png';
import telegram from './telgram4.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// My passwork 
function ApplyOnTheJobWith() {
    const [show, setShow] = useState(true)
    useEffect (() => {
        AOS.init({duration: 2000})
            },[])
    return (
         <div className="apply-with" id="Apply-on-a-job" >
<button className="but" ><a href="#" className="still-button"><FontAwesomeIcon icon={faArrowUp}  /></a>  </button>

            <br /><br /><br /><br /><br /><br />
        <h1 className="header">Apply on the job with</h1>
        <br /><br /><br /><br /><br />

        <div className="ways">
            <div className="way-2"><a   href="https://webz.telegram.org/#@Charlotte1000os" target="_blank" rel="noopener noreferrer"><img id="open" data-aos="fade-up-right" src={telegram} alt="image-2" /></a></div>
            <div className="way-1"><a data-aos="fade-up-right" /* onClick={Moving}*/ id="href" className="email" href="#call-us"><img  id="open" onClick={()=>setShow(true)}  src={gmail} alt="image-1" /></a></div>
           { 


    }
      </div>
        
    </div> 
    );
}

export default ApplyOnTheJobWith;