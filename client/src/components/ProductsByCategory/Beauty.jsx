import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct.jsx";
import "../NavigateProducts/ProductsNavigator.css";
import Sidebar from "../SideBar/Sidebar.jsx";
import { getProducts } from "../../api/index.js";

import { useNavigate } from "react-router-dom";

const Beauty = ({GetProdDetails}) => {
  let navigate= useNavigate()

  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) =>
      setData(res.data.filter((e) => e.category === "Beauty Product"))
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
                  return(
                    <>
                    <div>
                    <OneProduct prod={element}  GetProdDetails={GetProdDetails} key={i} />
                    <button className="btn1" onClick={(e)=>{
                      GetProdDetails(element._id)
                       navigate("/productDetails")}} >Buy</button>
                       <br></br>
                       </div>
                       
                    </>
                    
                  ) 
                })
                
                }
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="third-verticale">
        <img
          src="https://www.designhill.com/design-blog/wp-content/uploads/2017/07/offer-deal.png"
          style={{ width: "300px", height: "400px" }}
        ></img>
        <br></br>
        <img
          src="https://i.pinimg.com/originals/47/cd/dd/47cddd0849f5845fbbf9026e22736b9a.jpg"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
        <br></br>
        <img
          src="https://djx5h8pabpett.cloudfront.net/wp-content/uploads/sites/4/2021/08/04095342/Victorias_Secret_Bombshell.jpg"
          style={{ width: "300px", heigt: "800px" }}
        ></img>
      </div>
    </div>
  );
};

export default Beauty;
