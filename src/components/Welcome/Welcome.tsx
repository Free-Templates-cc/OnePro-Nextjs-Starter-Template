import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

const Welcome = (props: Props) => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
    
  };

  return (
    <OwlCarousel className="welcome-slider-area white" {...carouselConfig}>
      <div className="welcome-single-slide">
        <div className="slide-bg-one slide-bg-overlay"></div>
        <div className="welcome-area">
          <div className="container">
            <div className="row flex-v-center">
              <div className="col-md-7 col-lg-6 col-sm-12 col-xs-12">
                <div className="welcome-text">
                  <h4>We are</h4>
                  <h1>Business Theme Creator</h1>
                  <p>
                    At vero eos et accusamus iusto odio dignissimos ducmus qui
                    blanditiis praesentium voluptatum deleniti
                  </p>
                  <div className="home-button">
                    <a href="#">see our project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-single-slide">
        <div className="slide-bg-two slide-bg-overlay"></div>
        <div className="welcome-area">
          <div className="container">
            <div className="row flex-v-center">
              <div className="col-md-7 col-lg-6 col-sm-12 col-xs-12">
                <div className="welcome-text">
                  <h4>We are</h4>
                  <h1>Business Theme Creator</h1>
                  <p>
                    At vero eos et accusamus iusto odio dignissimos ducmus qui
                    blanditiis praesentium voluptatum deleniti
                  </p>
                  <div className="home-button">
                    <a href="#">see our project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-single-slide">
        <div className="slide-bg-three slide-bg-overlay"></div>
        <div className="welcome-area">
          <div className="container">
            <div className="row flex-v-center">
              <div className="col-md-7 col-lg-6 col-sm-12 col-xs-12">
                <div className="welcome-text">
                  <h4>We are</h4>
                  <h1>Business Theme Creator</h1>
                  <p>
                    At vero eos et accusamus iusto odio dignissimos ducmus qui
                    blanditiis praesentium voluptatum deleniti
                  </p>
                  <div className="home-button">
                    <a href="#">see our project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Welcome;
