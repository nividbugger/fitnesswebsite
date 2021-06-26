import React, { Component } from 'react';

import SplitImage from './splitImage.jsx';
import SplitList from './splitList.jsx';
import SplitMonitor from './splitMonitor.jsx';
import SplitFinal from './splitFinal.jsx';

class SplitFeature extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='split-features'>
                <SplitImage/>
                <SplitList/>
                <SplitMonitor/>
                <SplitFinal/>
            </div>
         );
    }
}
 
export default SplitFeature;