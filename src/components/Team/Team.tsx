import React from "react";
import Member from "./Member";

type Props = {};

const Team = (props: Props) => {
  return (
    <section className="team-area padding-100-70" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
            <div className="area-title text-center wow fadeIn">
              <h2>Meet Our Team</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
            </div>
          </div>
        </div>
        <div className="row team-slider">
          <Member
            image={`/images/member-1.jpg.webp`}
            name="Genevieve"
            position="CEO"
            bio="Lorem ipsum dolor sit amet et consectetur adipiscing elit, Ut seddo eiusmod tempor indunt ut labore et dolore magna."
          />
          <Member
            image={`/images/member-2.jpg.webp`}
            name="Irish"
            position="CFO"
            bio="Lorem ipsum dolor sit amet et consectetur adipiscing elit, Ut seddo eiusmod tempor indunt ut labore et dolore magna."
          />
          <Member
            image={`/images/member-3.jpg.webp`}
            name="Alan"
            position="CTO"
            bio="Lorem ipsum dolor sit amet et consectetur adipiscing elit, Ut seddo eiusmod tempor indunt ut labore et dolore magna."
          />
          <Member
            image={`/images/member-4.jpg.webp`}
            name="Charm"
            position="CMO"
            bio="Lorem ipsum dolor sit amet et consectetur adipiscing elit, Ut seddo eiusmod tempor indunt ut labore et dolore magna."
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
