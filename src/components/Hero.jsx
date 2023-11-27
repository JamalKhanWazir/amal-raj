import React, { useRef } from "react";
import heroImg from "../assets/Hero.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Testimonials from "./Testimonials";

const Hero = () => {

  return (
    <>
      <div className="hero" id="home">
        <main>
          <div className="hero-text">
            <div className="heading">
              <h1>3D VISUALIZER</h1>
            </div>

            <p className="paraFirst">
              "Crafting Tomorrow's Landscapes Today": Welcome to my world of 3D
              wonders,
            </p>
            <p className="paraSecond">
              where I craft your visions into reality through the art of
              visualization.
            </p>
          </div>

          <img src={heroImg} alt="Animated Hero" />
        </main>

        {/* Two Buttons of Hero Sections */}
        <div className="hero-btns">
          <Link to="/3d-animations">
            <button className="work-btns-1">3D Animations</button>
          </Link>

          <Link to={"/3d-renders"}>
            <button className="work-btns-2">3D Renders</button>
          </Link>
        </div>

        <div className="stats">
          <div className="stats-div-1">
            <h3>
              <span>
                <CountUp start={0} end={50} duration={5} delay={2} />
              </span>
              +
            </h3>
            <p>Projects Completed</p>
          </div>

          <div className="stats-div-2">
            <h3>
              <span>
                <CountUp start={0} end={10} duration={5} delay={2} />
              </span>
              +
            </h3>
            <p>International Projects </p>
          </div>

          <div className="stats-div-3">
            <h3>
              <span>
                <CountUp start={0} end={5} duration={5} delay={2} />
              </span>
            </h3>
            <p>Star Reviews on Fiverr</p>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Hero;
