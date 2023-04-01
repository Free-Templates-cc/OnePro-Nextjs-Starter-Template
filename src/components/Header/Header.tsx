import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="top-area" id="home">
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
      <div className="header-top-area">
        <div className="mainmenu-area" id="mainmenu-area">
          <div className="mainmenu-area-bg"></div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-header">
                <a href="#home" className="navbar-brand">
                  <img src="img/logo.png" alt="logo" />
                </a>
              </div>
              <div id="main-nav" className="stellarnav">
                <ul id="nav" className="nav navbar-nav">
                  <li className="active">
                    <a href="#home">home</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#client">Clients</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
