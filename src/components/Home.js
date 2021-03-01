import React, { Component } from "react";
import Slider1 from "./images/crypto/slider1.jpg";
import Slider2 from "./images/crypto/slider2.jpg";
import Person from "./images/crypto/person.png";
import Pen from "./images/icon/pen.svg";
import Video from "./images/icon/video.svg";
import Intellectual from "./images/icon/intellectual.svg";

import Asset1 from "./images/illustrator/Asset190.svg";
import Asset2 from "./images/illustrator/Asset189.svg";
import Asset3 from "./images/illustrator/Asset187.svg";
import Asset4 from "./images/illustrator/Asset186.svg";

import Client1 from "./images/client/01.jpg";
import Client2 from "./images/client/02.jpg";
import Client3 from "./images/client/03.jpg";
import Client4 from "./images/client/04.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Home extends Component {
  render() {
    const settings = {
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    };
    return (
      <div>
        <section className="home-slider position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item align-items-center active"
                style={{ backgroundImage: `url(${Slider1})` }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          Tag line here
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3">
                          Heading Here
                        </h1>
                        <p className="para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-7">
                          Description Here
                        </p>
                        <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-primary mt-2"
                          >
                            <i className="mdi mdi-email"></i> Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item align-items-center"
                style={{ backgroundImage: `url(${Slider2})` }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          Tagline here
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3">
                          Heading here
                        </h1>
                        <p className="para-desc mx-auto text-light para-dark animated fadeInUpBig animation-delay-7">
                          Subheading here
                        </p>
                        <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                          {/* <form>
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="rounded"
                            placeholder="E-mail"
                          />
                          <button type="submit" className="btn btn-primary">
                            Book Space
                          </button>
                        </div>
                      </form> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12">
                <img src={Person} className="img-fluid rounded" alt="" />
              </div>

              <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ml-lg-4">
                  <h4 className="title mb-4">About Us</h4>
                  <p className="text-muted">
                    Start working with
                    <span className="text-primary font-weight-bold">
                      Crypto Sangat
                    </span>
                    that can provide everything you need to generate awareness,
                    drive traffic, connect. Dummy text is text that is used in
                    the publishing industry or by web designers to occupy the
                    space which will later be filled with 'real' content. This
                    is required when, for example, the final text is not yet
                    available. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <a href="javascript:void(0)" className="btn btn-primary mt-3">
                    Join now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">What We Do</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Our Services Description Here
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-12 mt-5">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img src={Pen} className="avatar avatar-small" alt="" />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">Service 1</h4>
                    <p className="text-muted mb-0">
                      Nisi aenean vulputate eleifend tellus vitae eleifend enim
                      a eleifend Aliquam aenean elementum semper.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12 mt-5">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img src={Video} className="avatar avatar-small" alt="" />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">Service 2</h4>
                    <p className="text-muted mb-0">
                      Allegedly, a Latin scholar established the origin of the
                      text established by compiling unusual word.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12 mt-5">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img
                      src={Intellectual}
                      className="avatar avatar-small"
                      alt=""
                    />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">Service 3</h4>
                    <p className="text-muted mb-0">
                      It seems that only fragments of the original text remain
                      in the Lorem the original Ipsum texts used today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Follow Us</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 mb-8 pb-2 offset-md-2 offset-lg-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <i className="mdi mdi-youtube"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">YouTube</h4>
                  </div>
                  <button className="btn btn-secondary">Watch now</button>
                </div>
              </div>

              <div className="col-lg-8 col-md-8 mb-8 pb-2 offset-md-2 offset-lg-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <i className="mdi mdi-telegram"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Telegram</h4>
                  </div>
                  <button className="btn btn-secondary">Join now</button>
                </div>
              </div>

              <div className="col-lg-8 col-md-8 mb-8 pb-2 offset-md-2 offset-lg-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <i className="mdi mdi-account"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Become a Member</h4>
                  </div>
                  <button className="btn btn-secondary">Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">The Numbers</h4>
                </div>
              </div>
            </div>

            <div className="row" id="counter">
              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset1} className="avatar avatar-small" alt="" />
                  <h2 className="mb-0 mt-4">
                    <span className="counter-value" data-count="45000">
                      11000
                    </span>
                    $
                  </h2>
                  <h6 className="counter-head text-muted">Investment</h6>
                </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset2} className="avatar avatar-small" alt="" />
                  <h2 className="mb-0 mt-4">
                    <span className="counter-value" data-count="9">
                      1
                    </span>
                    +
                  </h2>
                  <h6 className="counter-head text-muted">Awards</h6>
                </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset3} className="avatar avatar-small" alt="" />
                  <h2 className="mb-0 mt-4">
                    <span className="counter-value" data-count="48002">
                      12050
                    </span>
                    $
                  </h2>
                  <h6 className="counter-head text-muted">Profitability</h6>
                </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset4} className="avatar avatar-small" alt="" />
                  <h2 className="mb-0 mt-4">
                    <span className="counter-value" data-count="11">
                      3
                    </span>
                    %
                  </h2>
                  <h6 className="counter-head text-muted">Growth</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Testimonials</h4>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12 mt-4">
                <div className="">
                  <OwlCarousel className="owl-carousel owl-theme" {...settings}>
                    <div className="media customer-testi m-2">
                      <img
                        src={Client1}
                        className="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div className="media-body content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " It seems that only fragments of the original text
                          remain in the Lorem Ipsum texts used today. "
                        </p>
                        <h6 className="text-primary">
                          - Thomas Israel{" "}
                          <small className="text-muted">C.E.O</small>
                        </h6>
                      </div>
                    </div>

                    <div className="media customer-testi m-2">
                      <img
                        src={Client2}
                        className="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div className="media-body content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star-half text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " One disadvantage of Lorum Ipsum is that in Latin
                          certain letters appear more frequently than others. "
                        </p>
                        <h6 className="text-primary">
                          - Barbara McIntosh{" "}
                          <small className="text-muted">M.D</small>
                        </h6>
                      </div>
                    </div>

                    <div className="media customer-testi m-2">
                      <img
                        src={Client3}
                        className="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div className="media-body content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " The most well-known dummy text is the 'Lorem Ipsum',
                          which is said to have originated in the 16th century.
                          "
                        </p>
                        <h6 className="text-primary">
                          - Carl Oliver{" "}
                          <small className="text-muted">P.A</small>
                        </h6>
                      </div>
                    </div>

                    <div className="media customer-testi m-2">
                      <img
                        src={Client4}
                        className="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div className="media-body content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " According to most sources, Lorum Ipsum can be traced
                          back to a text composed by Cicero. "
                        </p>
                        <h6 className="text-primary">
                          - Christa Smith{" "}
                          <small className="text-muted">Manager</small>
                        </h6>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
