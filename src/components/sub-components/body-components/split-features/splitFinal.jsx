import React, { Component } from 'react';

class SplitFinal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="split-features">
                <div className="col-md-6 nopadding">
                    <div className="split-image"> 
                        <img className="img-responsive wow fadeIn" src="images/gym-3.jpg" alt="Image" /> 
                    </div>
                </div>
                <div className="col-md-6 nopadding">
                    <div className="split-content">
                        <h1 className="wow fadeInUp">Pick Your Plan</h1>
                        <p className="wow fadeInUp"> </p>
                        <ul className="wow fadeInUp">
                            <li>Cardio workouts to keep you agile</li>
                            <li>Targeted muscle group workouts for each body type</li>
                            <li>Yoga and Stretching plans for maximum flexibility</li>
                            <li>Dance and zumba workouts  </li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SplitFinal;