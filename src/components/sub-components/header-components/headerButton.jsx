import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../../../css/style.css";
import "../../../css/animate.css";
import "../../../css/bootstrap.min.css";
import "../../../css/ionicons.min.css";
import "../../../css/owl.carousel.css";
import "../../../css/owl.theme.css";

class HeaderButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                <a className="navbar-brand page-scroll" href="#main"><img src="images/logo.png" width="80" height="30" alt="iLand" /></a> 
            </div>
         );
    }
}
 
export default HeaderButton;