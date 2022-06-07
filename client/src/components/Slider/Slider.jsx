import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import data from "./Sliders";

const Slider = () => {
  return (
    <Carousel
      autoPlay
    //   interval={4000}
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
    >
      {data.map((slide) => {
        return (
          <div key={slide.id}>
            <img src={slide.image_url} className="image-slider"></img>
            <div className="overlay">
              <h2 className="overlay_title">{slide.title}</h2>
              <p className="overlay_text">{slide.text}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
