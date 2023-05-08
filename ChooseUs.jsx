import React from "react";
import FirstImage from './high-payment.png';
import SecondImage from './grow-with-us.png';
import ThirdImage from './high-quality.png';


function WhyChooseUs() {
    return ( <div id="Why-choose-us"> <div className="contain"> 

    <br />
                <h1 className="head-quotes">Why choose us </h1>
        <div className="jobss">
            <div className="job-1s"><img src={FirstImage} alt="First-image" /></div>
            <div className="job-2s"><img src={SecondImage} alt="Second-image" /></div>
            <div className="job-3s"><img src={ThirdImage} alt="Third-image" /></div>
        </div>
    </div></div> );
}

export default WhyChooseUs;