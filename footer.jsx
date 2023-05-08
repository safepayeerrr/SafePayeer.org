import React from "react";
import logo from './logo.png';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useCopyToClipboard} from 'usehooks-ts'   ;



 const code = 'safepayeerrrr@gmail.com ';
 /*addEventListener("click", function(){
code.match('copied');
 })*/
function Footer() {

const [value, copy ] = useCopyToClipboard();


// npm i usehooks-ts


    return (
         <div>
         

<div className="container-footer">
    
<footer> 
<p>
© Copyright 2023 SafePayeer.com Group, Inc.
</p>
<div>
<p>All rights reserved. All registered trade marks here in are the property of their respective owners.
</p> 
<br /><br /><br /><div id="call-us"> 
<p>Message us in ⬇👇👇⬇👇⬇👇⬇ </p><br /><br /><div className="em">
<p className="email-color"  onClick={() => { copy(code)}   } >📧 {code}</p>  <acronym title="Copy"><a className="r" onClick={() => { copy(code)} } ><FontAwesomeIcon icon={faCopy} beatFade /></a></acronym>
</div>
</div> 
</div>
</footer>
</div>

    </div> );
    }


export default Footer;