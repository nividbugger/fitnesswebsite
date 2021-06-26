import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../css/style.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";
import "../css/ionicons.min.css";
import "../css/owl.carousel.css";
import "../css/owl.theme.css";

import AboutTrainer from './sub-components/footer-components/aboutTrainer.jsx';
import FooterList from './sub-components/footer-components/footerList.jsx';
import ContactDetail from './sub-components/footer-components/contactDetail.jsx';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer" id="contact">
                <div className="container">
                    <AboutTrainer/>
                    <FooterList/>
                    <ContactDetail/>
                </div>
            </div>
         );
    }
}
 
export default Footer;