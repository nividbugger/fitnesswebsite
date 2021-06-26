import React, { Component } from 'react';

import PitchIntro from './pitchIntro.jsx';
import PitchContent from './pitchContent.jsx';

class Pitch extends Component {
    state = {  }
    render() { 
        return (
            <div className='pitch text-center' id='classes'>
                <div className='container'>
                    <PitchIntro/>
                    <PitchContent/>
                </div>
            </div>
         );
    }
}
 
export default Pitch;