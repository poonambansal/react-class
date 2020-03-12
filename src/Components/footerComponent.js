import React, {Component} from 'react';
    import {BrowserRouter as Router, NavLink} from "react-router-dom";



class footerComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="footer-links">
	<div class="container">
    	<div class="row">
        	<div class="col-md-5 pad_t20">
            	<div class="row">
                	<div class="col-sm-4 col-md-4">
                    	<ul class="footer-bottom-links">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Artwork Guidelines</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-4">
                    	<ul class="footer-bottom-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">View all Services</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Store</a></li>
                            <li><a href="#">Business Login</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-4">
                    	<ul class="footer-bottom-links">
                            <li><a href="#">Templates</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center footer-logo"><img src="img/footer-logos.png" alt="" /></div>
            <div class="col-md-3 text-center help"><img src="img/help.png" alt="" /></div>
        </div>
    </div>
</div>
<div class="copyright">All Rights Reserved DREAMSCAPE PRINTING © 2016</div>
            </React.Fragment>

         );
    }
}
 
export default footerComponent;