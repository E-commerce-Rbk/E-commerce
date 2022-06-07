import React from "react";
import { useNavigate } from "react-router-dom";
const HomeAndGarden = () => {
  let navigate = useNavigate();
  return (
    <div className="homegarden-container">
      <h3 className="categ-title">Home And Garden </h3>
      <button onClick={()=>{navigate("/products/homeAndGarden")}}>Shop Now</button>
    </div>
  );
};
export default HomeAndGarden;
