import React from "react";
import Beauty from "./Beauty.jsx";
import Electronics from "./Electronics.jsx";
import HomeAndGarden from "./HomeAndGarden.jsx";
import JewleryAndWatches from "./jewleryAndWatches.jsx";
import "./ProductsNavigator.css"

const ProductsNavigator = () => {
  return (
    <div>
      <h1> This component containes sliders for each product</h1>
      <div className="category-list-container">
        <Beauty />
        <Electronics></Electronics>
        <HomeAndGarden></HomeAndGarden>
        <JewleryAndWatches></JewleryAndWatches>
      </div>
    </div>
  );
};

export default ProductsNavigator;
