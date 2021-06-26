import React, { Component } from 'react';

class SplitList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-6 nopadding">
                <div className="split-content">
                    <h1 className="wow fadeInUp">Stay fit<br/>Build A Routine</h1>
                    <p className="wow fadeInUp"> </p>
                    <ul className="wow fadeInUp">
                        <li>Take up an indoor/outdoor sport that you can just get together and play.</li>
                        <li>Say no to cheat days! Every small bit matters.</li>
                        <li>Choose the stairs! Not the elavator.</li>
                        <li>Eat breakfast like a king, lunch like a commoner and dinner like a pauper. </li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default SplitList;