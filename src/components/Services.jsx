import React from "react";
import data from "../data.json";
import { BsFacebook, Bs1Circle, BsInstagram } from "react-icons/bs";

const Services = () => {
 1
  return (
    <div className="services">
      <div className="services-heading-description">
        <h1>My <span>Services</span></h1>
        <p>
          I am a passionate 3D visualizer dedicated to transforming concepts
          into captivating visual experiences. Through my expertise in 3D
          rendering, modeling, and animation, I specialize in crafting immersive
          and photorealistic designs that bring your ideas to life.
        </p>
      </div>

      <div className="container-breakline">
        <div className="breakline"></div>
        <div className="breakline middle"></div>
        <div className="breakline"></div>
      </div>

      <div className="services-cards">
        {data.services.map((items) => (
          <div className="card" key={items.id}>
            <div className="icon" >
              <img src={items.image} alt={items.name} />
            </div>
            <h2>{items.name}</h2>
            <p>{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
