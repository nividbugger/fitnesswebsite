import React, { Component } from 'react';

class ClientSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="review-section" id="reviews">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="reviews owl-carousel owl-theme">
                            <div className="review-single"><img className="img-circle" src="images/customer1.png" alt="Client Testimonoal" />
                                <div className="review-text wow fadeInUp" data-wow-delay="0.2s">
                                    <p>Had the best experience with workit . <br/>
                                        Definitely recommend!!!</p>
                                    <h3>Swayam </h3>
                                    <h3>H&M company</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="images/customer2.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Best way to stay motivated during the qurantine. <br/>
                                        Definitely recommend!!!</p>
                                    <h3>Riya</h3>
                                    <h3>KJ organisation</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="images/customer3.jpeg" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>The best webapp for home workouts <br/>
                                        Definitely recommend!!!</p>
                                    <h3>Nivedithaa</h3>
                                    <h3>T&Co.</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="images/customer4.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Had the best experience with workit . <br/>
                                        Definitely recommend!!!</p>
                                    <h3>-Dwayne The Stone Johnson</h3>
                                    <h3>Design head Omega Corp</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="images/customer5.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Had the best experience with workit . <br/>
                                        Definitely recommend!!!</p>
                                    <h3>- Chloe ting</h3>
                                    <h3>CEO Behena digital</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ClientSection;