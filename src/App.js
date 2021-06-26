import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';
import BackToTop from "./components/sub-components/footer-components/backToTop.jsx";

import "bootstrap/dist/css/bootstrap.css";

import "./css/style.css";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/ionicons.min.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="wrapper">
        <Header/>
        <Body/>
        <Footer/>
        <BackToTop/>
      </div>
    );
  }
}

export default App;