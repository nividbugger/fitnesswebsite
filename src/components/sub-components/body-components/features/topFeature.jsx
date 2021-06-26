import React, { Component } from 'react';

class TopFeature extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-4 features-left text-right">
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon"> 
                        <i className="ion-ios-list-outline"></i> 
                    </div>
                    <div className="feature-single">
                        <p>Create a plan that’s tailored to your situation and create your everyday nutrition strategies.</p>
                    </div>
                </div>
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.3s">
                  <div className="icon"> 
                    <i className="ion-ios-speedometer-outline"></i> 
                  </div>
                  <div className="feature-single">
                    <p> We will make burn your sweat, blood and tears and still come back for this very experience, 
                    to engage yourselves and transform your mundane routine.</p>
                  </div>
                </div>
                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.4s">
                  <div className="icon"> 
                    <i className="ion-ios-pulse"></i> 
                  </div>
                  <div className="feature-single">
                    <p>We plan to raise your heart rates and make exercise your goto.</p>
                  </div>
                </div>
              </div>
         );
    }
}
 
export default TopFeature;