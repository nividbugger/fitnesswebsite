import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../../../../css/style.css";
import "../../../../css/animate.css";
import "../../../../css/bootstrap.min.css";
import "../../../../css/ionicons.min.css";
import "../../../../css/owl.carousel.css";
import "../../../../css/owl.theme.css";

class HeroComponent extends Component {
    state = { 
        headText : 'HEALTH POWER HAPPINESS'
     }
    render() { 
        return ( 
            <div className="hero-section">
                <div className="container nopadding">
                    <div className="col-md-12">
                        <div className="hero-content text-center">
                            <h1 className="wow fadeInUp" data-wow-delay="0.1s">HEALTH POWER HAPPINESS</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s"> You have the chance to determine your future and ensure proactive domination. <br/>Will you take it?  </p>
                            <a href="#" className="btn btn-action wow fadeInUp" style={{visibility: "visible", animationName: "fadeInUp"}}>Get Started</a> 
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HeroComponent;