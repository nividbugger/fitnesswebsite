import React, { Component } from 'react';

class BottomFeature extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-4 features-left text-left">
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.6s">
                    <div className="icon"> 
                        <i className="ion-ios-americanfootball-outline"></i> 
                    </div>
                    <div className="feature-single">
                        <p>Push you to achieve your goals with the help your determination</p>
                    </div>
                </div>
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.7s">
                    <div className="icon"> 
                        <i className="ion-ios-heart-outline"></i> 
                    </div>
                    <div className="feature-single">
                        <p>Gain total body endurance and strength.</p>
                    </div>
                </div>
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.8s">
                    <div className="icon"> 
                        <i className="ion-ios-analytics-outline"></i> 
                    </div>
                    <div className="feature-single">
                        <p>Repeating our benchmark routines daily, will help you measure your progress and stay motivated.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BottomFeature;