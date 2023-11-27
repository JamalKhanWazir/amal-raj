import React, { useEffect, useRef, useState } from "react";
import { animations, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

import { HashLink } from "react-router-hash-link";

// Animation files
import video from "../assets/videos/4.mp4";
import video1 from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";
import video4 from "../assets/videos/5.mp4";
import video5 from "../assets/videos/6.mp4";
import video6 from "../assets/videos/7.mp4";
import video7 from "../assets/videos/8.mp4";
import video8 from "../assets/videos/10.mp4";
import video9 from "../assets/videos/11.mp4";
import video10 from "../assets/videos/12.mp4";

const ThreeDAnimations = () => {
  const data = [
    { id: 1, videoURI: video1 },
    { id: 2, videoURI: video2 },
    { id: 3, videoURI: video3 },
    { id: 4, videoURI: video4 },
    { id: 5, videoURI: video5 },
    { id: 6, videoURI: video6 },
    { id: 7, videoURI: video7 },
    { id: 8, videoURI: video8 },
    { id: 9, videoURI: video9 },
    { id: 10, videoURI: video10 },
  ];

  // Useref and use-state hook to stop the video while hovering over it
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  if (videoRef.current) {
    isHovered ? videoRef.current.pause() : videoRef.current.play();
  }

  const clsName = "big-video";

  // Hiding a dive after some time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  // Description Animation
  const para_text =
    `"Dive into a world of architectural wonder through my compilation of
  3D animations, meticulously created using Lumion. Journey through
  these immersive visual stories that breathe life into architectural
  visions."`.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { delay: 1, staggerChildren: 0.12, delayChildren: 1 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      // y: 0,
      // x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      // y: 20,
      // x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="threeDAnimations">
      <div className="heroSec">
        <video
          className="backgroundVideo"
          // src={video}
          autoPlay
          muted
          loop
          controlsList="nodownload"
          playsInline
          webkit-playsinline
        >
          <source src={video} type="video/mp4" />
        </video>
        {isVisible && (
          <motion.div
            className="text-container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {para_text.map((el, id) => (
              <motion.p className="description-text" variants={child} key={id}>
                {el}
              </motion.p>
            ))}
          </motion.div>
        )}
        <HashLink to={"#more-animations"}>
          <BsChevronDown />
        </HashLink>
      </div>

      <div className="wrapper" id="more-animations">
        {data.map((item, index) => {
          return (
            <div className="video-container" key={index}>
              {item.id !== 6 ? (
                <video
                  ref={videoRef}
                  className={`videoElement`}
                  // src={item.videoURI}
                  autoPlay
                  muted
                  loop
                  controlsList="nodownload"
                  playsInline
                  webkit-playsinline
                >
                  <source src={item.videoURI} type="video/mp4" />
                </video>
              ) : (
                <video
                  ref={videoRef}
                  className={`videoElement ${clsName}`}
                  // src={item.videoURI}
                  autoPlay
                  muted
                  loop
                  controlsList="nodownload"
                  playsInline
                  webkit-playsinline
                >
                  <source src={item.videoURI} type="video/mp4" />
                </video>
              )}

              <div
                className="content"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button className="projects">View Project</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeDAnimations;
