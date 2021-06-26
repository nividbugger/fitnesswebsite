import React, { Component } from 'react';

import TopFeature from './topFeature.jsx';
import MidFeature from './midFeature.jsx';
import BottomFeature from './bottomFeature.jsx';

class Features extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="app-features text-center" id="features">
                <div className='container'>
                    <h1 className="wow fadeInDown" data-wow-delay="0.1s">Our promise to you</h1>
                    <p className="wow fadeInDown" data-wow-delay="0.2s">Transform angst & stress to energy & serenity in the comfort of your living room. </p>
                    <TopFeature/>
                    <MidFeature/>
                    <BottomFeature/>
                </div>
            </div>
         );
    }
}
 
export default Features;