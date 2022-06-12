import React from "react";
import Slider from "./Slider/Slider.jsx";
import "./Slider/Slider.css";
import CollectionHomePage from "./CollectionHomePage/CategoryPreview.jsx";
import Footer from "./footer/footer.jsx";

const Home = () => {
  return (
    <>
      <div className="slider-container">
        <Slider />
      </div>
      <CollectionHomePage></CollectionHomePage>
      <Footer></Footer>
    </>
  );
};

export default Home;
