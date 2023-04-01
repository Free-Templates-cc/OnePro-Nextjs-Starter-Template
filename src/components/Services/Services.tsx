import React from "react";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area section-padding" id="services">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
          <div className="area-title text-center wow fadeIn">
            <h2>Services We Provides</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry`s
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type.
            </p>
          </div>
        </div>
      </div>
      <div className="row flex-v-center">
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <div className="single-service right wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-rocket"></div>
            </div>
            <h4>Web Development</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="single-service right wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-camera"></div>
            </div>
            <h4>Photography</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="single-service right mbzero wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-desktop"></div>
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 hidden-sm">
          <div className="service-image text-center wow fadeIn">
            <Image src="/images/service-mockup.png.webp" alt="" width={244} height={508} />
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <div className="single-service left wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-cog"></div>
            </div>
            <h4>Online Marketing</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="single-service left wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-bullhorn"></div>
            </div>
            <h4>Degital Media</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="single-service left mbzero wow fadeIn">
            <div className="service-icon">
              <div className="i fa fa-cog"></div>
            </div>
            <h4>24/7 Support</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;
