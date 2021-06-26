import React, { Component } from 'react';

class PitchContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-12">
                <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                    <div className="pitch-icon"> 
                        <i className="ion-ios-checkmark-outline"></i> 
                    </div>
                    <div className="pitch-content">
                        <h1>START UP</h1>
                        <p> Kick it off with guided, well balanced workouts to get you into shape.</p>
                    </div>
                </div>
                <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                <div className="pitch-icon"> 
                    <i className="ion-ios-mic-outline"></i> 
                </div>
                <div className="pitch-content">
                    <h1>ELEVATE YOUR GAME</h1>
                    <p> Tone your body and build muscle. </p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                <div className="pitch-icon"> 
                    <i className="ion-ios-folder-outline"></i> 
                </div>
                <div className="pitch-content">
                    <h1>Personalised Training</h1>
                    <p> Workout plans tailor made to help you achieve your goals. </p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                <div className="pitch-icon"> 
                    <i className="ion-ios-folder-outline"></i> 
                </div>
                <div className="pitch-content">
                    <h1>Diet Plan</h1>
                    <p>A balanced and healthy meal plans for all body types. </p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                <div className="pitch-icon"> 
                    <i className="ion-ios-folder-outline"></i> 
                </div>
                <div className="pitch-content">
                    <h1>workouts for every muscle group</h1>
                    <p> For the best of cardio, muscle building and bodyweight exercises. </p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                <div className="pitch-icon"> 
                    <i className="ion-ios-folder-outline"></i> 
                </div>
                <div className="pitch-content">
                    <h1>#shakeit</h1>
                    <p>Bollhop, zumba and other dance workouts to keep the adrenaline up! </p>
                </div>
            </div>
            </div>
         );
    }
}
 
export default PitchContent;