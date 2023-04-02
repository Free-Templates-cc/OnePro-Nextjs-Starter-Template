import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

const Blog = (props: Props) => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: true,
    center: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
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
    <div className="feed-widget blog-feed mb50 wow fadeIn">
      <h4>Blog Feed</h4>
      <OwlCarousel
      className="blog-list"
      {...carouselConfig}
    >
        <div className="single-blog">
          <div className="blog-thumb">
            <Image
              src="/images/blog-1.jpg.webp"
              alt=""
              width={415}
              height={222}
            />
          </div>
          <div className="blog-details">
            <h4>
              <a href="#">The User Experience</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis... <a href="#">Read More</a>
            </p>
            <p className="blog-meta">
              Posted by <a href="#">admin</a> at <a href="#">04 Feb, 2017</a>
            </p>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-thumb">
            <Image
              src="/images/blog-2.jpg.webp"
              alt=""
              width={415}
              height={222}
            />
          </div>
          <div className="blog-details">
            <h4>
              <a href="#">The User Experience</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis... <a href="#">Read More</a>
            </p>
            <p className="blog-meta">
              Posted by <a href="#">admin</a> at <a href="#">04 Feb, 2017</a>
            </p>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-thumb">
            <Image
              src="/images/blog-3.jpg.webp"
              alt=""
              width={415}
              height={222}
            />
          </div>
          <div className="blog-details">
            <h4>
              <a href="#">The User Experience</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis... <a href="#">Read More</a>
            </p>
            <p className="blog-meta">
              Posted by <a href="#">admin</a> at <a href="#">04 Feb, 2017</a>
            </p>
          </div>
        </div>
        </OwlCarousel>
    </div>
  );
};

export default Blog;
