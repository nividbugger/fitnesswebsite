import React, { Component } from 'react';

class SplitImage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-6 nopadding">
                <div className="split-image"> 
                    <img className="img-responsive wow fadeIn" src="images/app_image.png" alt="Image" /> 
                </div>
            </div>
         );
    }
}
 
export default SplitImage;