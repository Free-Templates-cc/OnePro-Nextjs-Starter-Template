import React from "react";

type Props = {};

const Footer = (props: Props) => {

  const currentYear = new Date().getFullYear();

  return (
    <>

      

      



      

      

      

      

      

      

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
                    Copyright &copy; {currentYear}{" "}
                    &middot; All rights reserved &middot; This NextJs Starter Template is inpired by {" "}
                    <a href="https://colorlib.com/wp/template/onepro/" target="_blank">
                      OnePro - Colorlib HTML5 Template
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
