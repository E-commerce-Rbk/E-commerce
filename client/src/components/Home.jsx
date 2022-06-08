import React from "react";
import Slider from "./Slider/Slider.jsx";
import "./Slider/Slider.css";

const Home = () => {
  return (
    <div className="container" style={{ "margin-Left": "10%" }}>
      <h1 className="check-our">This is Home Page</h1>
      <Slider />
    </div>
  );
};

export default Home;
