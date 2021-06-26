import React, { Component } from 'react';

class Packages extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="pricing" className="pricing-section text-center">
                <div className="container">
                    <div className="col-md-12 col-sm-12 nopadding">
                        <div className="pricing-intro">
                            <h1 className="wow fadeInUp" data-wow-delay="0s">CUSTOM PACKAGES</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s"> We have packages available to all body types <br className="hidden-xs"/>
                                We also offer packages to people with varying lifestyles </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="table-left wow fadeInUp" data-wow-delay="0.4s">
                                <div className="pricing-details">
                                    <h2>For Beginners</h2>
                                    <span>Rs. 5,999</span>
                                    <ul>
                                        <li>basic warm ups</li>
                                        <li>20 mins of cardio</li>
                                        <li>20 mins of muscle workout</li>
                                        <li>15 mins relaxation and stretching</li>
                                    </ul>
                                    <button className="btn btn-primary btn-action btn-fill">Get Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="table-right wow fadeInUp" data-wow-delay="0.6s">
                                <div className="pricing-details">
                                    <h2>For Professionals</h2>
                                    <span>Rs. 10,999</span>
                                    <ul>
                                        <li>basic warm ups</li>
                                        <li>20 mins of cardio</li>
                                        <li>60 mins of muscle workout</li>
                                        <li>15 mins relaxation and stretching</li>
                                    </ul>
                                    <button className="btn btn-primary btn-action btn-fill">Get Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Packages;