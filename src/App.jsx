import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import Header, { HeaderPhone } from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ThreeDAnimations from "./components/ThreeDAnimations";
import ThreeDRenders from "./components/ThreeDRenders";
import Footer from "./components/Footer";
import Services from "./components/Services";
import GoToTop from "./components/GoToTop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/3d-animations" element={<ThreeDAnimations />} />
        <Route path="/3d-renders" element={<ThreeDRenders />} />
      </Routes>
      <GoToTop />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
