import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct.jsx";
import { getProducts } from "../../api/index.js";
import Sidebar from "../SideBar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
const Electronic = ({ GetProdDetails }) => {
  let navigate = useNavigate();
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

      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"
            className="aa"
          >
            <div
              style={{
                marginLeft: "-10rem",
                marginTop: "-4rem",
                width: " 800px",
              }}
            >
              <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {console.log(data)}
                {data.map((element, i) => {
                  return (
                    <div>
                      <OneProduct prod={element} key={i} />
                      <button
                        className="btn"
                        onClick={(e) => {
                          GetProdDetails(element._id);
                          navigate("/productDetails");
                        }}
                      >
                        {" "}
                        Buy
                      </button>
                      <br></br>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-verticale">
        <img
          src="https://media.karousell.com/media/photos/products/2015/07/11/wtsrazer_bundle_promotion_raya_special_1436580304_2fe6ca2f.jpg"
          style={{ width: "300px", height: "400px" }}
        ></img>
        <br></br>
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/20-series/geforce-rtx-super-series-og-1200x630.jpg"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
        <br></br>
        <img
          src="https://img.freepik.com/vecteurs-libre/flyer-montre-numerique-promotion-bannieres-medias-sociaux-carre_540495-279.jpg?w=740"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
      </div>
    </div>
  );
};

export default Electronic;
