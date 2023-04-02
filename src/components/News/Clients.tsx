import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

const Clients = (props: Props) => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: -2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };

  return (
    <OwlCarousel className="client-slider mt50 wow fadeIn" {...carouselConfig}>
      <div className="single-client">
        <Image
          src="/images/client-1.png.webp"
          alt=""
          width={230}
          height={120}
        />
      </div>
      <div className="single-client">
        <Image
          src="/images/client-2.png.webp"
          alt=""
          width={230}
          height={120}
        />
      </div>
      <div className="single-client">
        <Image
          src="/images/client-3.png.webp"
          alt=""
          width={230}
          height={120}
        />
      </div>
      <div className="single-client">
        <Image
          src="/images/client-4.png.webp"
          alt=""
          width={230}
          height={120}
        />
      </div>
      <div className="single-client">
        <Image
          src="/images/client-5.png.webp"
          alt=""
          width={230}
          height={120}
        />
      </div>
    </OwlCarousel>
  );
};

export default Clients;
