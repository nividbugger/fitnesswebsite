import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../../../css/style.css";
import "../../../css/animate.css";
import "../../../css/bootstrap.min.css";
import "../../../css/ionicons.min.css";
import "../../../css/owl.carousel.css";
import "../../../css/owl.theme.css";

class ContactDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-3 contact">
                <h1>Contact Us</h1>
                <p> Contact our 24/7 customer support if you have any questions. We'll help you out. </p>
                <a href="mailto:support@gmail.com">contact@workit.com</a> 
            </div>
         );
    }
}
 
export default ContactDetail;