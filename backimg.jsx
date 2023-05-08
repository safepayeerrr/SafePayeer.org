import React from "react";
import Image from './header.jpg';
import Top from './topnz-top.mp4';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";




function BackImg() {
    return ( <div className="back"> 
<img className="background-image" src={Image} alt="" />

    </div> );//🔝
}

export default BackImg;
// <button className="top-button"><a href="#"></a><video className="ba" src={Top} autoPlay loop muted ></video> </button>
