import React from "react";
import Beauty from "./Beauty.jsx";
import Electronics from "./Electronics.jsx";
import HomeAndGarden from "./HomeAndGarden.jsx";
import JewleryAndWatches from "./JewleryWatches.jsx";
import "./ProductsNavigator.css";

const ProductsNavigator = () => {
  return (
    <>
      <div></div>
      <div className="wrapper">
        <Beauty />
        <br />
        <br />
        <Electronics></Electronics>
        <br />
        <br />

        <HomeAndGarden></HomeAndGarden>
        <br />
        <br />
        <JewleryAndWatches></JewleryAndWatches>
        <br />
        <br />
      </div>
    </>
  );
};

export default ProductsNavigator;
