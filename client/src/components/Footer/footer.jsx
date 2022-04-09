import React from "react";
import './footer.css';
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa' 
import logo from './Group 6935.png'
  

const FooterPage = (props) => {
    return (
    <div class="pt-5 pb-2 footer" style={{background:props.user?'#FCEEE1':'#B2DCD6'}}>
            <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                <h2>Alone we can do little,<br/>together we can do so much!</h2>
                <img src ={logo} alt="logoofdastarkhwaan"/>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                    <h4 class="mt-lg-0 mt-sm-4 heads">Site Links</h4>
                    <a>Users</a>
                    <br/>
                    <a>Resturants</a>
                    <br/>
                    <a>NGOs</a>
                </div>
            </div>
            <div class="row">
                <div class="col copyright">
                    <p class="">Copyright © 2022 Dastarkhwaan. All Rights Reserved.</p>
                </div>
                <div class="col-lg-4 col-xs-12 followus">
                    <h4 class="heads">Follow us</h4>
                    <FaFacebookF size={24} className='mr-3'/>
                    <FaTwitter size={24} className='mr-3'/>
                    <FaInstagram size={24} className='mr-3'/>
                </div>
            </div>
    </div>
    );
}

export default FooterPage;