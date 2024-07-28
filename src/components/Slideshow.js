import React from "react";
import Slider from "react-slick";
import "./Slideshow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/1.JPG";
import Image2 from "../images/2.JPG";
import Image3 from "../images/3.JPG";

const Slideshow = () => {
  const slideImages = [Image1, Image2, Image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="slide">
              <img src={slideImage} alt="Image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
