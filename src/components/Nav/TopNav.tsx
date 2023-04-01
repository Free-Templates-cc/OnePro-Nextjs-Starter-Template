import React from "react";

type Props = {};

const TopNav = (props: Props) => {

  return (
    <div className="top-bar-area gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="call-to-action">
              <p>
                <i className="fa fa-phone"></i>{" "}
                <a href="callto:+8801744430440">+880 1911 854 378</a>
              </p>
              <p>
                <i className="fa fa-envelope-o"></i>{" "}
                <a href="#">
                  <span>info@free-templates.cc</span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="header-social-bookmark">
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
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
