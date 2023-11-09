import React, { useRef } from "react";
import heroImg from "../assets/Hero.png";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

const Hero = () => {
  const projectsCount = useRef(null);
  const interprojectsCount = useRef(null);
  const reviewCount = useRef(null);

  // Animation of counting the Projects value
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 3,
      onUpdate: (val) => (projectsCount.current.textContent = val.toFixed()),
    });
  };

  const InternationalProjectsCount = () => {
    animate(0, 10, {
      duration: 3,
      onUpdate: (val) =>
        (interprojectsCount.current.textContent = val.toFixed()),
    });
  };

  const fiverrReview = () => {
    animate(0, 5, {
      duration: 3,
      onUpdate: (val) =>
        (reviewCount.current.textContent = val.toFixed()),
    });
  };

  return (
    <div className="hero">
      <main>
        <div className="hero-text">
          <h1>3D VISUALIZER</h1>
          <p>
            "Crafting Tomorrow's Landscapes Today": Welcome to my world of 3D
            wonders, where I craft your visions into reality through the art of
            visualization.
          </p>
        </div>
        <img src={heroImg} alt="Animated Hero" />
      </main>

      <div className="hero-btns">
        <Link to={"/3d-animaitons"}>
          <button className="work-btns">3D Animations</button>
        </Link>
        <Link to={"/3d-renders"}>
          <button className="work-btns">3D Renders</button>
        </Link>
      </div>

      <div className="stats">
        <div>
          <h3>
            <motion.span
              whileInView={animationProjectsCount}
              ref={projectsCount}
            ></motion.span>
            +
          </h3>
          <p>Projects Completed</p>
        </div>
        <div>
          <h3>
            <motion.span
              whileInView={InternationalProjectsCount}
              ref={interprojectsCount}
            ></motion.span>
            +
          </h3>
          <p>International Projects </p>
        </div>
        <div>
          <h3>
            <motion.span
              whileInView={fiverrReview}
              ref={reviewCount}
            ></motion.span>
          </h3>
          <p>Star Reviews on Fiverr</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
