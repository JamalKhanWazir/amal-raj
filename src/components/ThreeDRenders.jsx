import React, { useState } from "react";

import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";

import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

// All renders or images
import image1 from "../assets/3d-renders/1 (1).jpg";
import image2 from "../assets/3d-renders/1 (2).jpg";
import image3 from "../assets/3d-renders/1.jpg";
import image4 from "../assets/3d-renders/2.jpg";
import image5 from "../assets/3d-renders/3.jpg";
import image6 from "../assets/3d-renders/4.jpg";
import image7 from "../assets/3d-renders/5.jpg";
import image8 from "../assets/3d-renders/6.jpg";
import image9 from "../assets/3d-renders/16.jpg";
import image10 from "../assets/3d-renders/7.jpg";
import image11 from "../assets/3d-renders/8.jpg";
import image12 from "../assets/3d-renders/9.jpg";
import image13 from "../assets/3d-renders/10.jpg";
import image14 from "../assets/3d-renders/11.jpg";
import image15 from "../assets/3d-renders/12.jpg";
import image16 from "../assets/3d-renders/13.jpg";
import image17 from "../assets/3d-renders/14.jpg";
import image18 from "../assets/3d-renders/15.jpg";
import { HashLink } from "react-router-hash-link";


const imageVariant = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ThreeDRenders = () => {
  //  We will puch object into the array having id and imageURI
  const rendersData = [
    { id: 1, render: image1 },
    { id: 2, render: image4 },
    { id: 3, render: image2 },
    { id: 4, render: image10 },
    { id: 5, render: image17 },
    { id: 6, render: image6 },
    { id: 7, render: image7 },
    { id: 8, render: image3 },
    { id: 9, render: image8 },
    // { id: 10, render: image10 },
    { id: 11, render: image11 },
    { id: 12, render: image12 },
    { id: 13, render: image13 },
    { id: 14, render: image14 },
    { id: 15, render: image15 },
    { id: 16, render: image16 },
    { id: 17, render: image10 },
    { id: 18, render: image18 },
  ];

  const [items, setItems] = useState(null);

  return (
    <div className="threeDRenders">
      <img className="renders-bg-image" src={image9} alt="Background Image" />
      
      <div className="grid-wrapper" id="my-renders">
        {rendersData.map((items, index) => {
          return (
            <motion.img
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={
                (index + 1) % 3 === 0
                  ? "render-image big-image"
                  : "render-image"
              }
              key={items.id}
              src={items.render}
              alt={`render${items.id}`}
              onClick={() => setItems(items)}
              loading="lazy"              
            />
          );
        })}
      </div>

      {/* <div className="grid-wrapper" id="my-renders">
        {rendersData.map((items, index) => {
          return (
            <motion.img
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={
                (index + 1) % 3 === 0
                  ? "render-image big-image"
                  : "render-image"
              }
              key={items.id}
              src={items.render}
              alt={`render${items.id}`}
              onClick={() => setItems(items)}
            />
          );
        })}
      </div> */}

      <div className="overlay" style={{ display: items ? "flex" : "none" }}>
        <IoMdClose onClick={() => setItems(null)} />
        {items && <img className="clicked-image" src={items.render} />}
      </div>

      <HashLink to={"#my-renders"}>
        <BsChevronDown />
      </HashLink>
    </div>
  );
};

export default ThreeDRenders;
