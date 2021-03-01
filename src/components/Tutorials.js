import React, { Component } from "react";
import { tutorials } from "./data";

class Tutorial extends Component {
  render() {
    return (
      <>
        <section class="bg-half bg-light d-table w-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title">Tutorials</h4>
                  <div class="page-next">
                    <nav aria-label="breadcrumb" class="d-inline-block">
                      <ul class="breadcrumb bg-white rounded shadow mb-0">
                        <li class="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Tutorials
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="position-relative">
          <div class="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section class="section">
          <div class="container">
            <div class="row">
              {tutorials.map((item, index) => {
                return (
                  <div class="col-lg-12 col-md-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="position-relative">
                      <div class="section-title ml-lg-4">
                        <h4 class="title mb-4 text-center">{item.title}</h4>
                      </div>
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          class="embed-responsive-item"
                          src={item.link}
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <hr className="mt-50 mb-50"></hr>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Tutorial;
