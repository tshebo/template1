import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import { RiArrowDownCircleFill } from "@remixicon/react";
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <h1>HOME</h1>
      <section id="home"></section>
      <section id="about"></section>
      <section id="services"></section>
      <section id="products"></section>
      <section id="contact">
        {isVisible && (
          <div onClick={scrollToTop} className="back-to-top-btn">
            <RiArrowDownCircleFill color="black" size={20} />
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
