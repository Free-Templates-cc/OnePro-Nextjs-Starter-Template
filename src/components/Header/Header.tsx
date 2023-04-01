import React, { useEffect, useRef } from "react";
import TopNav from "../Nav/TopNav";
import Image from "next/image";
import useVerticalScrollEvent from "@/hooks/useVerticalScrollEvent";
import NavLink from "./NavLink";

type Props = {};

const Header = (props: Props) => {
  const stickyRef = useRef<HTMLDivElement>(null);

  useVerticalScrollEvent((evt:any) => {
    if(evt.currentTarget.scrollY >= 60) {
      (stickyRef.current as HTMLDivElement).classList.add('is-sticky');
      return;
    } 
    (stickyRef.current as HTMLDivElement).classList.remove('is-sticky');
  });

  
  return (
    <header className="top-area" id="home">
      <TopNav />
      <div className="header-top-area" ref={stickyRef}>
        <div className="mainmenu-area" id="mainmenu-area">
          <div className="mainmenu-area-bg"></div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-header">
                <a href="#home" className="navbar-brand">
                  <Image src="/images/logo.png.webp" alt="logo" width={174} height={36} />
                </a>
              </div>
              <div id="main-nav" className="stellarnav">
                <ul id="nav" className="nav navbar-nav">
                  <NavLink id="home">home</NavLink>
                  <NavLink id="features">Features</NavLink>
                  <NavLink id="services">Services</NavLink>
                  <NavLink id="portfolio">Portfolio</NavLink>
                  <NavLink id="team">team</NavLink>
                  <NavLink id="testimonials">Testimonials</NavLink>
                  <NavLink id="pricing">Pricing</NavLink>
                  <NavLink id="news">News</NavLink>
                  <NavLink id="contact">Contact</NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
