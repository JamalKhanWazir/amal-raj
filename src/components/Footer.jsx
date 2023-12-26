import React from "react";

import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="self-details">
          <div>
            <h2>Amal Raj</h2>
            <p>“Crafting Tomorrow's Landscapes Today”</p>
          </div>

          <div>
            <h3 className="footer-about">About Me</h3>
            <p className="little-big-para">
              I am a 3D Visualizer who creates 3D animations and renders.
            </p>
          </div>

          <div className="contact">
            <h3>Contact Us</h3>
            <div className="phone-email">
              <p>+918138095005</p>
              <p>amalraj1129@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="information">
          <h3>Gallery</h3>
          <div className="footer-links">
            <NavLink to={"/3d-animations"} >
              <p>3D Animations</p>
            </NavLink>
            <NavLink to={"/3d-renders"}>
              <p>3D Renders</p>
            </NavLink>
          </div>
        </div>

        <div className="useful-links">
          <h3>Information</h3>
          <div className="footer-links">
            <NavLink to={"/services"}>
              <p>Services</p>
            </NavLink>
            <NavLink to={"/about"}>
              <p>About</p>
            </NavLink>
            <HashLink to={"#contact-me-sec"}>
              <p>Contact</p>
            </HashLink>
          </div>
        </div>

        <div className="subscribe-us">
          <p>Subscribe More Info</p>

          <form className="footer-form">
            <input
              className="footer-input"
              type="email"
              placeholder="Enter you email"
            />
            <input
              className="footer-submit-btn"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>

      <div className="breakline-footer"></div>

      <div className="social-media-links">
        <div>
          <a href="https://twitter.com/Amal___raj" target="_blank">
            <div>
              <RiTwitterXLine className="twitter" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/amal-raj-231a56212/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <div>
              <RiLinkedinFill className="linkedIn" />
            </div>
          </a>
          <a href="https://www.instagram.com/_amal._.raj_/" target="_blank">
            <div>
              <RiInstagramLine className="insta" />
            </div>
          </a>
        </div>
        <p>Amal Raj @2023 All Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
