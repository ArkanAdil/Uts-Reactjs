import React, { Fragment } from "react";
import img from "./img/banner/banner1.png";
import img1 from "./img/banner/banner2.png";
import img2 from "./img/banner/banner3.png";

class Slideimg extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="row p-3">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 gede"
                  src={img}
                  alt="First slide"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 gede"
                  src={img1}
                  alt="Second slide"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 gede"
                  src={img2}
                  alt="Third slide"
                ></img>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Slideimg;
