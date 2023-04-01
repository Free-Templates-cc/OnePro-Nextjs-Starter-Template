import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  position: string;
  bio: string;
};

const Member = (props: Props) => {
  const { image, name, position, bio } = props;
  return (
    <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
      <div className="single-team center white wow fadeIn">
        <div className="member-top-details relative">
          <div className="member-thumb">
            <Image src={image} alt={`${name} Image`} width={263} height={321} />
          </div>
          <div className="member-details v-center">
            <h4>
              {name}<span>{position}</span>
            </h4>
            <p>
              {bio}
            </p>
          </div>
        </div>
        <div className="member-bottom-details">
          <div className="member-name-and-designation">
            <h4>
            {name}<span>{position}</span>
            </h4>
          </div>
          <ul className="social-bookmark">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Member;
