import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrent((prevCurrent) => (prevCurrent + 1) % length);
      }
    }, 3000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };
  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };
  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>

      {images.map((img, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          <img src={img} alt={`Slide ${index}`} className="image" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
