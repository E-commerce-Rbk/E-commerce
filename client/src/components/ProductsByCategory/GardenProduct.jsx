import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct.jsx";
import Sidebar from "../SideBar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../api/index.js";
const GardenProduct = ({ GetProdDetails }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) =>
      setData(res.data.filter((e) => e.category === "Home And Garden"))
    );
  }, [false]);
  let navigate = useNavigate();
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
                height:"auto"
              }}
            >
              <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {console.log(data)}
                {data.map((element, i) => {
                  return (
                    <>
                      <div>
                        <OneProduct
                          prod={element}
                          GetProdDetails={GetProdDetails}
                          key={i}
                        />
                        <button
                          className="btn1"
                          onClick={(e) => {
                            GetProdDetails(element._id);
                            navigate("/productDetails");
                          }}
                        >
                          Buy
                        </button>
                        <br></br>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-verticale">
        <img
          src="https://img.freepik.com/vecteurs-libre/mobilier-maison-chaise-promotion-ligne-banniere-boite-mobile-pour-publication-reseaux-sociaux_540495-215.jpg"
          style={{ width: "300px", height: "400px" }}
        ></img>
        <br></br>
        <img
          src="https://image.isu.pub/191010140616-ee6067711aa69f9597f5aba585731b81/jpg/page_1.jpg"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
        <br></br>
        <img
          src="https://rabatt-kompass.ch/public/gimg/7/3/4/0/5/73405-900-100000.jpg"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
      </div>
    </div>
  );
};

export default GardenProduct;
