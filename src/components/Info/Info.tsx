import React from 'react'
import Image from "next/image"
type Props = {}

const Info = (props: Props) => {
  return (
    <section className="info-area gray-bg">
        <div className="container">
          <div className="row flex-v-center">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="intro-image wow fadeIn">
                <Image src="/images/intro-bg.jpg.webp" alt="" width={555} height={540} />
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
  )
}

export default Info