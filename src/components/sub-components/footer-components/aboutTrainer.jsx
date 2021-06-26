import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../../../css/style.css";
import "../../../css/animate.css";
import "../../../css/bootstrap.min.css";
import "../../../css/ionicons.min.css";
import "../../../css/owl.carousel.css";
import "../../../css/owl.theme.css";

class AboutTrainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-6 contact">
                <h1>About Trainer</h1>
                <p>Greg D'Costa is a trainer at Cult Bangalore whoe believes that boosting your energy level with short, quick workouts and get your dream body!
                <br/>
                All you need is a few minutes time and the WorkIt Training app, so don’t delay, start today!</p>
            </div>
         );
    }
}
 
export default AboutTrainer;