import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/styles.css";

// client images
import kunal from "../assets/1 Kunal Jaiswal.jpg";
import susan from "../assets/susan.jpg";
import maca from "../assets/german.jpg";
import usman from "../assets/paki.jpg";
import variod from "../assets/egyptian.jpg";
import bellboss from "../assets/us.jpg";
import durga from "../assets/indian1.jpg";
import nithin from "../assets/indian2.jpg";

// countries flag
import uae from "../assets/uae.png";
import italy from "../assets/italy.png";
import germany from "../assets/germany.png";
import pakistan from "../assets/pakistan.png";
import egypt from "../assets/egypt.png";
import usa from "../assets/usa.png";
import india from "../assets/india.png";

// Variants
const headingVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

const lineVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};

const swiperVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="title-line">
        <h1>Words From Clients</h1>
        <div className="line"></div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500,
          // disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={kunal} alt="Client Image" />
            <FaQuoteLeft className="svg-left" />
            <p className="client-comment">
              We're thrilled with the 3D animation Amal created for our car wash
              business! Amal captured our vision perfectly, delivered on time,
              and the animation is boosting our online presence. Highly
              recommend!
            </p>
            <FaQuoteRight className="svg-right" />

            <div className="name-flag">
              <h3 className="client-name">Kunal Jaiswal</h3>
              <img className="flag" src={uae} alt="UAE-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={susan} alt="Client Image" />
            <FaQuoteLeft className="svg-left susan" />
            <p className="client-comment">
              It's rare to come across a professional who not only understands
              the technical aspects but also has a keen eye for aesthetics. Amal
              is that rare gem. Their 3D rendering and animation work have
              elevated our architectural presentations and made a significant
              impact on our clients. We couldn't be happier with the results.
            </p>
            <FaQuoteRight className="svg-right susan" />

            <div className="name-flag">
              <h3 className="client-name">susannelechner</h3>
              <img className="flag" src={italy} alt="Itlay-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={maca} alt="Client Image" />
            <FaQuoteLeft className="svg-left maca" />
            <p className="client-comment">
              We are so thankful to have found amal for our Attic interior
              design . Their work speaks for itself. The level of realism and
              detail in their 3D render is astonishing. They have taken our
              projects to a whole new level, and our clients are always
              impressed.
            </p>
            <FaQuoteRight className="svg-right maca" />

            <div className="name-flag">
              <h3 className="client-name">Rodriguez Maca</h3>
              <img className="flag" src={germany} alt="Germany-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={usman} alt="Client Image" />
            <FaQuoteLeft className="svg-left usman" />
            <p className="client-comment">
              Working with Amal has been a breeze from start to finish. Their
              professionalism, responsiveness, and ability to bring our ideas to
              life through 3D animations are truly commendable. They have
              consistently exceeded our expectations, and we look forward to a
              long-lasting partnership.
            </p>
            <FaQuoteRight className="svg-right usman" />

            <div className="name-flag">
              <h3 className="client-name">usmansaudi</h3>
              <img className="flag" src={pakistan} alt="Pakistan-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={variod} alt="Client Image" />
            <FaQuoteLeft className="svg-left variod" />
            <p className="client-comment">
              I've had the pleasure of working with Amal on multiple occasions,
              and their consistency in delivering high-quality 3D visualizations
              is impressive. Their architectural animations and renders are not
              just images; they are experiences that help our clients envision
              their future spaces. Highly recommended!
            </p>
            <FaQuoteRight className="svg-right variod" />

            <div className="name-flag">
              <h3 className="client-name">Variod</h3>
              <img className="flag" src={egypt} alt="Egypt-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={bellboss} alt="Client Image" />
            <FaQuoteLeft className="svg-left bellboss" />
            <p className="client-comment">
              From the first project we collaborated on, Amal Raj has
              consistently delivered stunning 3D visualizations that are as
              close to reality as it gets. Their architectural animations have a
              cinematic quality that truly engages viewers.
            </p>
            <FaQuoteRight className="svg-right bellboss" />

            <div className="name-flag">
              <h3 className="client-name">bellboss</h3>
              <img className="flag" src={usa} alt="USA-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={durga} alt="Client Image" />
            <FaQuoteLeft className="svg-left durga" />
            <p className="client-comment">
              We are consistently impressed by the quality of work Amal
              delivers. Their architectural visualizations go beyond the
              ordinary, making our projects stand out. The level of realism and
              the power of their animations and renders are remarkable.
            </p>
            <FaQuoteRight className="svg-right durga" />

            <div className="name-flag">
              <h3 className="client-name">Samvit Durga</h3>
              <img className="flag" src={india} alt="India-Flag" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-div">
            <div className="image-div"></div>
            <img className="client-image" src={nithin} alt="Client Image" />
            <FaQuoteLeft className="svg-left nithin" />
            <p className="client-comment">
              I've worked with many 3D visualizers in the past, but Amal stands
              out as a true artist in the field. Their architectural animations
              and renders are not just a visual representation but a
              storytelling medium. They have a unique ability to capture the
              essence and mood of a space, making their work exceptional.
            </p>
            <FaQuoteRight className="svg-right nithin" />

            <div className="name-flag">
              <h3 className="client-name">Nithin surendran</h3>
              <img className="flag" src={india} alt="India-Flag" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
