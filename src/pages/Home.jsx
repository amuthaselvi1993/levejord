import React from "react";
import Carousel from "../components/Carousel";
import images from "../assets/carouselImages";
const Home = () => {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
