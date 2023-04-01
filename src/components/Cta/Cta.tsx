import React from 'react'

type Props = {}

const Cta = (props: Props) => {
  return (
    <section className="promo-area section-padding relative">
    <div className="area-bg" data-stellar-background-ratio="0.6"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div className="promo-content text-center white wow fadeIn">
            <h2>Our Latest Design & Creative Templates</h2>
            <a href="#" className="download-button">
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cta