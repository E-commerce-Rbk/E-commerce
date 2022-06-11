import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct.jsx";
import { getProducts } from "../../api/index.js";
import Sidebar from "../SideBar/Sidebar.jsx";
const Electronic = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) =>
      setData(res.data.filter((e) => e.category === "Computer Electronic"))
    );
  }, [false]);
  return (
    <div className="beauty-container">
      <div className="wrapper">
        <Sidebar></Sidebar>
      </div>

      <div class="bg-orange-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"
            className="aa"
          >
            <div
              style={{
                marginLeft: "-10rem",
                marginTop: "-4rem",
                width: " auto",
              }}
            >
              <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {console.log(data)}
                {data.map((e, i) => {
                  return <OneProduct prod={e} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
