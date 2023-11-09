import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1 className="logo-title">Amal Raj</h1>
      </Link>

      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
