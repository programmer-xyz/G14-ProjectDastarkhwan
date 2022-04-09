import React from "react";
import './footer.css';
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa' 
import logo from './Group 6935.png'
  

const FooterPage = (props) => {
    return (
    <div className="pt-5 pb-5 footer" style={{background:props.user?'#FCEEE1':'#B2DCD6'}}>
        <div className="container">
            <div className="row ">
                <div className="col-lg-5 col-xs-12 about-company">
                <h2>Alone we can do little,<br/>together we can do so much!</h2>
                <img src ={logo} alt="logoofdastarkhwaan"/>
                </div>
                <div className="col-lg-4 col-xs-12 location">
                    <h4 className="mt-lg-0 mt-sm-4 heads">Site Links</h4>
                    <a>Users</a>
                    <br/>
                    <a>Resturants</a>
                    <br/>
                    <a>NGOs</a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col copyright">
                    <p className="">Copyright © 2022 Dastarkhwaan. All Rights Reserved.</p>
                </div>
                <div className="col-lg-4 col-xs-12 followus">
                    <h4 className="mt-lg-0 mt-sm-4 heads">Follow us</h4>
                    <FaFacebookF size={24} className='mr-3'/>
                    <FaTwitter size={24} className='mr-3'/>
                    <FaInstagram size={24} className='mr-3'/>
                </div>
        </div>
        </div>
    </div>
    );
}

export default FooterPage;