import React from "react";
import FirstImage from './convert-image.png';
import SecondImage from './data-entry1.png';
import ThirdImage from './retype.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function AvailableJobsInOurCompany() {
    return ( <div id="Available-jobs">
        <button className="but" ><a href="#" className="still-button"><FontAwesomeIcon icon={faArrowUp}  /></a>  </button>

        <h1 className="head-quote">Available Jobs in our company </h1>
        <div className="jobs">
            <div className="job-1"><img src={FirstImage} alt="First-image" /></div>
            <div className="job-2"><img src={SecondImage} alt="Second-image" /></div>
            <div className="job-3"><img src={ThirdImage} alt="Third-image" /></div>
        </div>
    </div> );
}

export default AvailableJobsInOurCompany;