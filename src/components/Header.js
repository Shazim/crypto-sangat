import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/crypto_sangat.png";

class Header extends Component {
  render() {
    return (
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <div>
            <a className="logo" href="/">
              <img src={Logo} height="50" alt="" />
            </a>
          </div>
          <div className="buy-button">
            <a
              href="http://t.me/chillpk"
              target="_blank"
              className="btn btn-primary"
            >
              <i className="mdi mdi-telegram"></i> Join Now
            </a>
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <div id="navigation">
            <ul className="navigation-menu nav-left">
              {/* <li className="has-submenu">
              <a href="javascript:void(0)">Content</a
              ><span className="menu-arrow"></span>
              <ul className="submenu megamenu">
                <li>
                  <ul>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Telegram</a></li>
                  </ul>
                </li>
              </ul>
            </li> */}
              <li>
                <a href="/tutorials">Tutorials</a>
              </li>
              <li>{/* <a href="#">Contant Us</a> */}</li>
            </ul>
            <div className="buy-menu-btn d-none">
              <a
                href="http://t.me/chillpk"
                target="_blank"
                className="btn btn-primary"
              >
                <i className="mdi mdi-telegram"></i> Join Now
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
