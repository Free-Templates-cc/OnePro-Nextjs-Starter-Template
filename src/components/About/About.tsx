import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
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
  )
}

export default About