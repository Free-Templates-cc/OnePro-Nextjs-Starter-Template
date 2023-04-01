import React from 'react'

type Props = {}

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
  )
}

export default News