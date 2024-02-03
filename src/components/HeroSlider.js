import React, { useState, useEffect } from "react";
import heroImage1 from "../assets/images/hero/hero1.jpg";
import heroImage2 from "../assets/images/hero/hero2.jpg";
import heroImage3 from "../assets/images/hero/hero3.jpg";

const HeroSlider = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      <div className="slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="bullets">
        {images.map((_, index) => (
          <div
            key={index}
            className={`bullet ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
