import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoArrowUp } from "react-icons/io5";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    // Height we want when to show the toparrowbtn
    let heightToHidden = 250;

    // This will tell the scolling value from the top
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This will look for every scrolling
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="go-to-top" onClick={goToTop}>
          <IoArrowUp />
        </div>
      )}
    </>
  );
};

export default GoToTop;
