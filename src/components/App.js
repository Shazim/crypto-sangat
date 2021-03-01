import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/magnific-popup.css";
import "./css/animate.css";
import "./css/animations-delay.css";
import "./css/style.css";
import "./css/colors/default.css";

import { CustomFunction } from "./js/app.js";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {
  componentDidMount() {
    CustomFunction();
  }

  render() {
    return (
      <div className="App">
        <Header className="child-header" />
        <Main className="child-main" />
        <Footer className="child-footer" />
        <a href="#" class="btn btn-icon btn-soft-primary back-to-top">
          <i className="mdi mdi-arrow-up"></i>
        </a>
      </div>
    );
  }
}
export default App;
