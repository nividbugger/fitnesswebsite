import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../css/style.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";
import "../css/ionicons.min.css";
import "../css/owl.carousel.css";
import "../css/owl.theme.css";

import HeaderButton from './sub-components/header-components/headerButton.jsx';
import NavBarComponents from './sub-components/header-components/navBarComponents.jsx';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <HeaderButton/>
                        <NavBarComponents/>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Header;