import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct.jsx";
import { getProducts } from "../../api/index.js";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar.jsx";
const WatchesAndJewlery = ({GetProdDetails}) => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) =>
      setData(res.data.filter((e) => e.category === "Jewlery and Watches"))
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
          src="https://ae01.alicdn.com/kf/HTB1Iv4JX3mH3KVjSZKzq6z2OXXaL/SINOBI-Car-Creative-Style-Men-Watch-Mens-Fashion-Speed-Racing-Sports-Chronograph-Watches-Quartz-Wristwatch-Relogio.jpg_Q90.jpg_.webp"
          style={{ width: "300px", height: "400px" }}
        ></img>
        <br></br>
        <img
          src="https://i0.wp.com/www.menstylefashion.com/wp-content/uploads/2019/08/bracelet-for-men.jpg?fit=750%2C521&ssl=1"
          style={{ width: "300px", height: "600px" }}
        ></img>
        <br></br>
        <img
          src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1573624197836/ethos-offers.jpg"
          style={{ width: "300px", height: "300px" }}
        ></img>
      </div>
    </div>
  );
};
export default WatchesAndJewlery;
