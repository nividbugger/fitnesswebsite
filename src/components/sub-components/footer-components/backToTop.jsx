import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../../../css/style.css";
import "../../../css/animate.css";
import "../../../css/bootstrap.min.css";
import "../../../css/ionicons.min.css";
import "../../../css/owl.carousel.css";
import "../../../css/owl.theme.css";

class BackToTop extends Component {
    state = {  }
    render() { 
        return ( 
            <a id="back-top" className="back-to-top page-scroll" href="#main"> 
                <i className="ion-ios-arrow-thin-up"></i> 
            </a>
         );
    }
}
 
export default BackToTop;