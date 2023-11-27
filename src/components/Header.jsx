import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Header = ({ menuOpen, setMenuOpen }) => {
  // changin Navbar bg-color while scrooling
  const [bgColor, setBgColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={bgColor ? "navbar bg-color" : "navbar"} id="top">
      <HashLink to={"/"}>
        <h1 className="logo-title">Amal Raj</h1>
      </HashLink>

      <NavContent />

      <button onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <BiMenuAltRight /> : <MdClose />}
      </button>
    </nav>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <div className="nav-links">
    <NavLink onClick={() => setMenuOpen(false)} to={"/"}>Home</NavLink>
    <NavLink onClick={() => setMenuOpen(false)} to={"/services"}>Services</NavLink>
    <NavLink onClick={() => setMenuOpen(false)} to={"/about"}>About</NavLink>
    {/* <NavLink onClick={() => setMenuOpen(false)} to={"/contact"}>Contact</NavLink> */}
  </div>
);

export default Header;
