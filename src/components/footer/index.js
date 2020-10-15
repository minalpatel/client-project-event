import React from "react";
import Img from "../../images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedinIn, faYoutube  } from '@fortawesome/free-brands-svg-icons'

function Footer() {
 return(
    <div class="container-fluid text-center foot">
      <div class="row">
        <div class="col-sm-4">
            <h3>Contact US</h3><br />
            <h4>Our address and Contact Information is here.</h4>
        </div>
        <div class="col-sm-4">
            <h3>Connect</h3>
            <br />
          <a><FontAwesomeIcon icon={faFacebook} /></a>
           <a><FontAwesomeIcon icon={faTwitter} /></a>
           <a><FontAwesomeIcon icon={faGoogle} /></a>
           <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
           <a><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <div class="col-sm-2">
            <img src={Img} class="imageEvent" />
        </div>
     </div>
     <div class="base">
         <ul>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contactus'>Contact Us</a>
        <a href='/faqs'>FAQs</a>
        <a href='/event'>Create Event</a>
        <a href='/login'>Login</a>
        </ul>
    </div>
    </div>  
);

}

export default Footer;