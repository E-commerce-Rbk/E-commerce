import React from "react";
import { useNavigate } from "react-router-dom";
const Electronics = () => {
  let navigate = useNavigate();
  return (
    <div className="electronics-container">
      <h3 className="categ-title">Electronics</h3>
      <button
        onClick={() => {
          navigate("/products/electronic");
        }}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Electronics;
