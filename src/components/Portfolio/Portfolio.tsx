import React from 'react'
import PortfolioItem from './PortfolioItem'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <section className="portfolio-area padding-100-70 gray-bg" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center wow fadeIn">
                <h2>Our Awesome Projects</h2>
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
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="portfolio-menu-content wow fadeIn">
                <ul className="portfolio-menu">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".web">Web Design</li>
                  <li data-filter=".photography">Photography</li>
                  <li data-filter=".development">Web Development </li>
                  <li data-filter=".marketing">Online Marketing </li>
                  <li data-filter=".digital">Digital Media </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-list wow fadeIn">
            <PortfolioItem image={`/images/portfolio_1.jpg.webp`} title={`Web Development`} description={`Business / Service / Product / Template`} />
            <PortfolioItem image={`/images/portfolio_2.jpg.webp`} title={`Web Design`} description={`Business / Service / Product / Template`} />
            <PortfolioItem image={`/images/portfolio_3.jpg.webp`} title={`App Development`} description={`Business / Service / Product / Template`} />
            <PortfolioItem image={`/images/portfolio_4.jpg.webp`} title={`Web Marketing`} description={`Business / Service / Product / Template`} />
            <PortfolioItem image={`/images/portfolio_5.jpg.webp`} title={`Email Marketing`} description={`Business / Service / Product / Template`} />
            <PortfolioItem image={`/images/portfolio_6.jpg.webp`} title={`Online Marketing`} description={`Business / Service / Product / Template`} />
          </div>
        </div>
      </section>
  )
}

export default Portfolio