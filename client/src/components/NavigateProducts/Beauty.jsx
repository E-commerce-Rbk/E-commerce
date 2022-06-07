import React from "react";
import { useNavigate } from "react-router-dom";
const Beauty = () => {
  let navigate = useNavigate();
  return (
    <div className="beauty-container ">
      <h3 className="categ-title">Beauty </h3>
      <button
        onClick={() => {
          navigate("/products/beauty");
        }}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Beauty;
