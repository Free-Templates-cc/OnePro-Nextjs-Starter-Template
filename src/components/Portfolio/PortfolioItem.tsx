import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const PortfolioItem = (props: Props) => {
  const { image, title, description } = props;
  return (
    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 marketing photography portfolio-item">
      <div className="single-portfolio white">
        <div className="portfolio-thumb">
          <Image src={image} alt={`${title} Image`} width={360} height={260} />
        </div>
        <div className="portfolio-details v-center">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
