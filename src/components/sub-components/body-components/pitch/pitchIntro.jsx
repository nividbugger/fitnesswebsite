import React, { Component } from 'react';

class PitchIntro extends Component {
    state = { headText : "EVERYTHING IS POSSIBLE WITH WORK-IT" }
    render() { 
        return ( 
            <div className="pitch-intro">
                <h1 className="wow fadeInDown" data-wow-delay="0.2s">EVERYTHING IS POSSIBLE WITH WORKIT</h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">Do you feel like this quarantine has made you a potato?<br/>
                WorkIt is here to help you change that!<br/> Join us and be the change.</p>
            </div>
         );
    }
}
 
export default PitchIntro;