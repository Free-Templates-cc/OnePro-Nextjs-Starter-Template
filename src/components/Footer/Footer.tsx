import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <section className="about-area padding-100-50 gray-bg" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="about-content mb50 wow fadeIn">
                <p>About Our Company</p>
                <h2>We are Theme Creator</h2>
                <p className="high-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <a href="#" className="read-more">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="waraper skills-member wow fadeInLeft mb50">
                <div className="skillst5">
                  <div className="skillbar" data-percent="78%">
                    <div className="title">HTML 5</div>
                    <div className="count-bar color-1">
                      <div className="count"></div>
                    </div>
                  </div>
                  <div className="skillbar" data-percent="91%">
                    <div className="title">CSS 4</div>
                    <div className="count-bar color-2">
                      <div className="count"></div>
                    </div>
                  </div>
                  <div className="skillbar" data-percent="58%">
                    <div className="title">jQuery</div>
                    <div className="count-bar color-3">
                      <div className="count"></div>
                    </div>
                  </div>
                  <div className="skillbar" data-percent="63%">
                    <div className="title">PHP</div>
                    <div className="count-bar color-4">
                      <div className="count"></div>
                    </div>
                  </div>
                  <div className="skillbar" data-percent="100%">
                    <div className="title">Photoshop</div>
                    <div className="count-bar color-5">
                      <div className="count"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-area section-padding" id="service">
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
                <img src="img/service/service-mockup.png" alt="" />
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

      <section className="portfolio-area padding-100-70 gray-bg" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center wow fadeIn">
                <h2>Our Awesome Projects</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="portfolio-menu-content wow fadeIn">
                <ul className="portfolio-menu">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".web">Web Design</li>
                  <li data-filter=".photography">Photography</li>
                  <li data-filter=".development">Web Development </li>
                  <li data-filter=".marketing">Online Marketing </li>
                  <li data-filter=".digital">Digital Media </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-list wow fadeIn">
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 marketing photography portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_1.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Web Development</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 digital development portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_2.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Web Design</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 photography marketing portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_3.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>App Development</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 web digital portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_4.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Web Marketing</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 development marketing portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_5.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Email Marketing</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 web portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_6.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Web Development</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 photography portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_7.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Creative Thinking</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 development web portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_8.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Web Development</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
            <div className="hidden-sm col-md-4 col-lg-4 col-sm-6 col-xs-12 digital portfolio-item">
              <div className="single-portfolio white">
                <div className="portfolio-thumb">
                  <img src="img/portfolio/portfolio_9.jpg" alt="" />
                </div>
                <div className="portfolio-details v-center">
                  <h4>Online Marketing</h4>
                  <p>Business / Service / Product / Template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-area section-padding relative">
        <div className="area-bg" data-stellar-background-ratio="0.6"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="promo-content text-center white wow fadeIn">
                <h2>Our Latest Design & Creative Templates</h2>
                <a href="#" className="download-button">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-area padding-100-70" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center wow fadeIn">
                <h2>Meet Our Team</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.
                </p>
              </div>
            </div>
          </div>
          <div className="row team-slider">
            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
              <div className="single-team center white wow fadeIn">
                <div className="member-top-details relative">
                  <div className="member-thumb">
                    <img src="img/team/member-1.jpg" alt="" />
                  </div>
                  <div className="member-details v-center">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet et consectetur adipiscing elit,
                      Ut sed do eiusmod tempor indunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
                <div className="member-bottom-details">
                  <div className="member-name-and-designation">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                  </div>
                  <ul className="social-bookmark">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
              <div className="single-team center white wow fadeIn">
                <div className="member-top-details relative">
                  <div className="member-thumb">
                    <img src="img/team/member-2.jpg" alt="" />
                  </div>
                  <div className="member-details v-center">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet et consectetur adipiscing elit,
                      Ut sed do eiusmod tempor indunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
                <div className="member-bottom-details">
                  <div className="member-name-and-designation">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                  </div>
                  <ul className="social-bookmark">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
              <div className="single-team center white wow fadeIn">
                <div className="member-top-details relative">
                  <div className="member-thumb">
                    <img src="img/team/member-3.jpg" alt="" />
                  </div>
                  <div className="member-details v-center">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet et consectetur adipiscing elit,
                      Ut sed do eiusmod tempor indunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
                <div className="member-bottom-details">
                  <div className="member-name-and-designation">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                  </div>
                  <ul className="social-bookmark">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
              <div className="single-team center white wow fadeIn">
                <div className="member-top-details relative">
                  <div className="member-thumb">
                    <img src="img/team/member-4.jpg" alt="" />
                  </div>
                  <div className="member-details v-center">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet et consectetur adipiscing elit,
                      Ut sed do eiusmod tempor indunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
                <div className="member-bottom-details">
                  <div className="member-name-and-designation">
                    <h4>
                      TOPSMMPANEL.COM<span>Chef</span>
                    </h4>
                  </div>
                  <ul className="social-bookmark">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-area gray-bg">
        <div className="container">
          <div className="row flex-v-center">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="intro-image wow fadeIn">
                <img src="img/intro/intro-bg.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="intro-content wow fadeInRight">
                <h6 className="high-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded as by desire, that they
                  cannot foresee the pain and trouble that are bound to ensues;
                  et and equal blame belongs to those who fail in their duty
                  through weakness.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor som incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="read-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testmonial-area section-padding" id="client">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center wow fadeIn">
                <h2>Our Happy Clients</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 col-sm-12 col-xs-12">
              <div className="testmonial-member-list wow fadeIn">
                <div className="single-testmonial center">
                  <div className="testmonial-author-data">
                    <div className="author-image">
                      <img src="img/testmonial/testmonial-1.jpg" alt="" />
                    </div>
                    <div className="author-designation">
                      <h4>TOPSMMPANEL.COM</h4>
                      <p>CEO of TOPSMMPANEL.COM</p>
                    </div>
                  </div>
                  <div className="testmonial-author-details">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas mo tias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio
                    </p>
                  </div>
                </div>
                <div className="single-testmonial center">
                  <div className="testmonial-author-data">
                    <div className="author-image">
                      <img src="img/testmonial/testmonial-1.jpg" alt="" />
                    </div>
                    <div className="author-designation">
                      <h4>TOPSMMPANEL.COM</h4>
                      <p>CEO of TOPSMMPANEL.COM</p>
                    </div>
                  </div>
                  <div className="testmonial-author-details">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas mo tias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio
                    </p>
                  </div>
                </div>
                <div className="single-testmonial center">
                  <div className="testmonial-author-data">
                    <div className="author-image">
                      <img src="img/testmonial/testmonial-1.jpg" alt="" />
                    </div>
                    <div className="author-designation">
                      <h4>TOPSMMPANEL.COM</h4>
                      <p>CEO of TOPSMMPANEL.COM</p>
                    </div>
                  </div>
                  <div className="testmonial-author-details">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas mo tias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price-area padding-100-70 gray-bg" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
              <div
                className="single-price center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="price-hidding">
                  <h2>Basic</h2>
                  <p>The best to start</p>
                </div>
                <div className="price-rate white">
                  <h2>
                    <span>$</span>9.99 <span>/monthly</span>
                  </h2>
                </div>
                <div className="price-details">
                  <ul>
                    <li>3,600 Keywords</li>
                    <li>50 Social Accounts</li>
                    <li>25 Analytics Campaigns</li>
                    <li>45 Email Accounts</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="buy-now-button">
                  <a href="#" className="read-more">
                    Buy It Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
              <div
                className="single-price center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="price-hidding">
                  <h2>Basic</h2>
                  <p>The best to start</p>
                </div>
                <div className="price-rate white">
                  <h2>
                    <span>$</span>9.99 <span>/monthly</span>
                  </h2>
                </div>
                <div className="price-details">
                  <ul>
                    <li>3,600 Keywords</li>
                    <li>50 Social Accounts</li>
                    <li>25 Analytics Campaigns</li>
                    <li>45 Email Accounts</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="buy-now-button">
                  <a href="#" className="read-more">
                    Buy It Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
              <div
                className="single-price center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="price-hidding">
                  <h2>Basic</h2>
                  <p>The best to start</p>
                </div>
                <div className="price-rate white">
                  <h2>
                    <span>$</span>9.99 <span>/monthly</span>
                  </h2>
                </div>
                <div className="price-details">
                  <ul>
                    <li>3,600 Keywords</li>
                    <li>50 Social Accounts</li>
                    <li>25 Analytics Campaigns</li>
                    <li>45 Email Accounts</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="buy-now-button">
                  <a href="#" className="read-more">
                    Buy It Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 visible-sm">
              <div
                className="single-price center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="price-hidding">
                  <h2>Basic</h2>
                  <p>The best to start</p>
                </div>
                <div className="price-rate white">
                  <h2>
                    <span>$</span>9.99 <span>/monthly</span>
                  </h2>
                </div>
                <div className="price-details">
                  <ul>
                    <li>3,600 Keywords</li>
                    <li>50 Social Accounts</li>
                    <li>25 Analytics Campaigns</li>
                    <li>45 Email Accounts</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="buy-now-button">
                  <a href="#" className="read-more">
                    Buy It Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="blog-and-feed-area section-padding white-gray-bg"
        id="news"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center wow fadeIn">
                <h2>Our Latest News</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 hidden-sm">
              <div className="feed-widget twitter-feed mb50 wow fadeIn">
                <h4>Twitter Feed</h4>
                <ul>
                  <li>
                    <div className="twitter-icon">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <a href="#">@_sumonrahman</a>: Lorem ipsum dolors sit amets
                    sums consectetur adipicing elit sed do eiusmod eset tempor
                    incididunt ut labore.
                  </li>
                  <li>
                    <div className="twitter-icon">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <a href="#">@_sumonrahman</a>: Lorem ipsum dolors sit amets
                    sums consectetur adipicing elit sed do eiusmod eset tempor
                    incididunt ut labore.
                  </li>
                  <li>
                    <div className="twitter-icon">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <a href="#">@_sumonrahman</a>: Lorem ipsum dolors sit amets
                    sums consectetur adipicing elit sed do eiusmod eset tempor
                    incididunt ut labore.
                  </li>
                  <li>
                    <div className="twitter-icon">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <a href="#">@_sumonrahman</a>: Lorem ipsum dolors sit amets
                    sums consectetur adipicing elit sed do eiusmod eset tempor
                    incididunt ut labore.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="feed-widget blog-feed mb50 wow fadeIn">
                <h4>Blog Feed</h4>
                <div className="blog-list">
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <img src="img/blog/blog-1.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                      <h4>
                        <a href="#">The User Experience</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sagittis... <a href="#">Read More</a>
                      </p>
                      <p className="blog-meta">
                        Posted by <a href="#">admin</a> at{" "}
                        <a href="#">04 Feb, 2017</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <img src="img/blog/blog-2.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                      <h4>
                        <a href="#">The User Experience</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sagittis... <a href="#">Read More</a>
                      </p>
                      <p className="blog-meta">
                        Posted by <a href="#">admin</a> at{" "}
                        <a href="#">04 Feb, 2017</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <img src="img/blog/blog-3.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                      <h4>
                        <a href="#">The User Experience</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sagittis... <a href="#">Read More</a>
                      </p>
                      <p className="blog-meta">
                        Posted by <a href="#">admin</a> at{" "}
                        <a href="#">04 Feb, 2017</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-md col-lg-4 col-sm-6 col-xs-12">
              <div className="feed-widget insta-feed wow fadeIn">
                <h4>Instagram Feed</h4>
                <ul>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_4.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_5.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_6.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_7.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_8.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/insta_9.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="client-slider mt50 wow fadeIn">
                <div className="single-client">
                  <img src="img/client/client-1.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-2.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-3.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-4.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-5.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-1.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-2.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-3.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-4.png" alt="" />
                </div>
                <div className="single-client">
                  <img src="img/client/client-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area padding-top gray-bg" id="contact">
        <div className="contact-form-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="contact-details-content wow fadeIn">
                  <h2>Contact Info</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the et majori have suffered alteration in
                    some form, by injected humour, Domised words which don`t
                    look even slightly believable. If you are going to use a pas
                    of Lorem Ipsum, you need to be sure there isn`t anything
                    embarrassing hidden in the middle of text.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="contact-address-details">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Address</h5>
                        <p>Freedom Way, Jersey City, NJ 07305, USA</p>
                      </div>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Phone</h5>
                        <p>+880 1911 854 378</p>
                      </div>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Email</h5>
                        <p>
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="bcdedddfd7ccd5ccd9ce92dfd3d1fcdbd1ddd5d092dfd3d1"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="contact-form mb50 wow fadeIn">
                  <h2>Send Message</h2>
                  <form action="process.php" id="contact-form" method="post">
                    <div className="form-group" id="name-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-name"
                          name="form-name"
                          placeholder="Name.."
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" id="email-field">
                      <div className="form-input">
                        <input
                          type="email"
                          className="form-control"
                          id="form-email"
                          name="form-email"
                          placeholder="Email.."
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" id="phone-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-phone"
                          name="form-phone"
                          placeholder="Subject.."
                        />
                      </div>
                    </div>
                    <div className="form-group" id="message-field">
                      <div className="form-input">
                        <textarea
                          className="form-control"
                          rows={6}
                          id="form-message"
                          name="form-message"
                          placeholder="Your Message Here..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="map-area relative">
                  <div id="map" style={{width: "100%", height: "300px"}}>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-area white">
        <div className="footer-top-area padding-100-50 dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="footer-social-bookmark text-center wow fadeIn">
                  <h2>Business One</h2>
                  <ul className="social-bookmark">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a className="google-plus" href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a className="flickr" href="#">
                        <i className="fa fa-flickr"></i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="dribble" href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area deep-dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="footer-copyright text-center wow fadeIn">
                  <p>
                    Copyright &copy;
                    
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
