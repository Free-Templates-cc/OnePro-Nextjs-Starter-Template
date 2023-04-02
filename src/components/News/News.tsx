import React from "react";
import Image from "next/image";
import Clients from "./Clients";
import Blog from "./Blog";
type Props = {};

const News = (props: Props) => {
  return (
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
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
            <Blog />
          </div>
          <div className="hidden-md col-lg-4 col-sm-6 col-xs-12">
            <div className="feed-widget insta-feed wow fadeIn">
              <h4>Instagram Feed</h4>
              <ul>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_1.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_2.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_3.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_4.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_5.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_6.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_7.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_8.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/insta_9.jpg.webp"
                      alt=""
                      width={107}
                      height={107}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12"></div>
          <Clients />
        </div>
      </div>
    </section>
  );
};

export default News;
