import React from "react";
import { useNavigate } from "react-router-dom";
const JewleryAndWatches = () => {
  let navigate = useNavigate();
  return (
    <div className="jewlery-container">
      <h3 className="categ-title">Jewlery And Watches</h3>
      <button
        onClick={() => {
          navigate("/products/watchesAndJewlery");
        }}
      >
        Shop Now
      </button>
    </div>
  );
};
export default JewleryAndWatches;
