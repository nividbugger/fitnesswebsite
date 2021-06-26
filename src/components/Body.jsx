import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import "../css/style.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";
import "../css/ionicons.min.css";
import "../css/owl.carousel.css";
import "../css/owl.theme.css";

import HeroComponent from './sub-components/body-components/hero/heroComponent.jsx';
import Pitch from './sub-components/body-components/pitch/pitch.jsx';
import Features from './sub-components/body-components/features/features.jsx';
import SplitFeature from './sub-components/body-components/split-features/splitFeature.jsx';
import BoldCall from './sub-components/body-components/bold-call/boldCall.jsx';
import ClientSection from './sub-components/body-components/client-section/clientSection.jsx';
import Packages from './sub-components/body-components/package-section/packages.jsx';
import SubscribeForm from './sub-components/body-components/subscribe-form/subscribeForm.jsx';

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main app form' id='main'>
                <HeroComponent/>
                <Pitch/>
                <Features/>
                <SplitFeature/>
                <BoldCall/>
                <ClientSection/>
                <Packages/>
                <SubscribeForm/>
            </div>
         );
    }
}

export default Body;