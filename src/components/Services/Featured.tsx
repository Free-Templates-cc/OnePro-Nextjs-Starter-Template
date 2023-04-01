import React from "react";

type Props = {};

const Featured = (props: Props) => {
  return (
    <section className="service-top-area padding-100-50" id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
            <div className="single-service text-center wow fadeIn">
              <div className="service-icon">
                <div className="i fa fa-rocket"></div>
              </div>
              <h3>Web Development</h3>
              <p>
                Lorem Ipsum is a simply dummy texts of the printing and
                typesetting industry. Lorem Ipsum has been the industry`s
                standard dummy text ever since.
              </p>
              <a href="#" className="read-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
            <div className="single-service text-center wow fadeIn">
              <div className="service-icon">
                <div className="i fa fa-camera"></div>
              </div>
              <h3>Photography</h3>
              <p>
                Lorem Ipsum is a simply dummy texts of the printing and
                typesetting industry. Lorem Ipsum has been the industry`s
                standard dummy text ever since.
              </p>
              <a href="#" className="read-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div className="single-service text-center wow fadeIn">
              <div className="service-icon">
                <div className="i fa fa-cog"></div>
              </div>
              <h3>Online Marketing</h3>
              <p>
                Lorem Ipsum is a simply dummy texts of the printing and
                typesetting industry. Lorem Ipsum has been the industry`s
                standard dummy text ever since.
              </p>
              <a href="#" className="read-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
