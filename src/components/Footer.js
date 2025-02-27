import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoLight from "./images/logo_dark.png";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" className="logo-footer">
                  <img src={LogoLight} height="150" alt="" />
                </a>
              </div>

              <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <p className="mt-4">
                  We are proud to say that we have come to this point in our
                  crypto journey and willing to share our unlimited knowledge
                  with newbies.
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"></div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Social Media</h4>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/Crypto-Sangat-113012840487229/"
                      className="rounded"
                    >
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/groups/944049246097867/?ref=share"
                      className="rounded"
                    >
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.youtube.com/channel/UCt1Q4bJR-vjRBZ46ISBKb1w"
                      className="rounded"
                    >
                      <i className="mdi mdi-youtube"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://t.me/joinchat/SgnrxGbuXjqFnjFG"
                      className="rounded"
                    >
                      <i className="mdi mdi-telegram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © 2021 Crypto Sangat. Design with
                    <i className="mdi mdi-heart text-danger"></i> by
                    <a
                      href="http://orbiqon.com/"
                      target="_blank"
                      className="text-reset"
                    >
                      Orbiqon
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
