import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image"
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

const Testimonials = (props: Props) => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: true,
    dots: true,
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
    <section className="testmonial-area section-padding" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
            <div className="area-title text-center wow fadeIn">
              <h2>Our Happy Clients</h2>
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
          <div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 col-sm-12 col-xs-12">
            <OwlCarousel
              className="testmonial-member-list wow fadeIn"
              {...carouselConfig}
            >
              <div className="single-testmonial center">
                <div className="testmonial-author-data">
                  <div className="author-image">
                    <Image src="/images/testmonial-1.jpg.webp" alt="" width={120} height={120} />
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
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio
                  </p>
                </div>
              </div>
              <div className="single-testmonial center">
                <div className="testmonial-author-data">
                  <div className="author-image">
                  <Image src="/images/testmonial-1.jpg.webp" alt="" width={120} height={120} />
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
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio
                  </p>
                </div>
              </div>
              <div className="single-testmonial center">
                <div className="testmonial-author-data">
                  <div className="author-image">
                  <Image src="/images/testmonial-1.jpg.webp" alt="" width={120} height={120} />
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
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
