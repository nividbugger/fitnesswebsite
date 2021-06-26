import React, { Component } from 'react';

class SplitMonitor extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="split-features2">
                <div className="col-md-6 nopadding">
                    <div className="split-content second">
                        <h1 className="wow fadeInUp">Monitor Your Progress</h1>
                        <p className="wow fadeInUp">See the results and feel the difference </p>
                        <ul className="wow fadeInUp">
                            <li> Manage your diet. Eat healthy. </li>
                            <li> Monitor your weight loss/gain.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 nopadding">
                    <div className="split-image"> 
                        <img className="img-responsive wow fadeIn" src="images/app_image2.png" alt="Image" /> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SplitMonitor;