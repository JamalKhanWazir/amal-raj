import React from "react";
import amal from "../assets/Amal Raj.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>Hi I'm Amal,</h1>

        <div className="para">
          <p className="para1">
            Welcome to my world of 3D visualization and design! I'm a passionate
            and experienced 3D visualizer with a strong foundation in
            transforming concepts and ideas into stunning visual
            representations.
          </p>

          <p className="para2">
            Having worked on international projects, I understand the importance
            of cultural nuances and diverse design preferences, ensuring that
            your vision transcends borders. With a knack for storytelling
            through animations, I can turn static models into dynamic, engaging
            visual experiences.
          </p>
        </div>

        <HashLink to={"#contact-me-sec"}>
          <button>Get a Quote</button>
        </HashLink>
      </div>

      <img src={amal} alt="Amal Raj" />
    </div>
  );
};

// const nameVariant = {
//   hidden: {
//     opacity: 0,
//     y: -300,
//     // scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     // scale: 1,
//     transition: {
//       duration: 2,
//       // mass: 1,
//       type: "spring",
//       // stiffness: 10,
//     },
//   },
// };

// const paraVariant = {
//   hidden: {
//     opacity: 0,
//     y: 300,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

// const imgVariant = {
//   hidden: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//   },
// };

// const About = () => {
//   return (
//     <div className="about">
//       <div>
//         <motion.h1 variants={nameVariant} initial="hidden" animate="visible">
//           Hi I'm Amal,
//         </motion.h1>

//         <div className="para">
//           <motion.p
//             variants={paraVariant}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               delay: 1.2,
//               duration: 1,
//             }}
//           >
//             Welcome to my world of 3D visualization and design! I'm a passionate
//             and experienced 3D visualizer with a strong foundation in
//             transforming concepts and ideas into stunning visual
//             representations.
//           </motion.p>

//           <motion.p
//             variants={paraVariant}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               delay: 1.4,
//               duration: 1,
//             }}
//           >
//             Having worked on international projects, I understand the importance
//             of cultural nuances and diverse design preferences, ensuring that
//             your vision transcends borders. With a knack for storytelling
//             through animations, I can turn static models into dynamic, engaging
//             visual experiences.
//           </motion.p>
//         </div>

//         <motion.button
//           variants={paraVariant}
//           initial="hidden"
//           animate="visible"
//           transition={{
//             delay: 1.6,
//             duration: 1,
//           }}
//         >
//           Get a Quote
//         </motion.button>
//       </div>

//       <motion.img
//         variants={imgVariant}
//         initial="hidden"
//         animate="visible"
//         transition={{
//           delay: 2.5,
//           duration: 1.2,
//         }}
//         src={amal}
//         alt="Amal Raj"
//       />
//     </div>
//   );
// };

export default About;
