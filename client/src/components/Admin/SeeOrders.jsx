import AdminSidebar from "../AdminSideBar/AdminSideBar.jsx";
import React, { useEffect, useState } from "react";
import OneOrder from "./OneOrder/OneOrder.jsx";
import axios from "axios";
import "./SeeOrdres.css";

const SeeOrders = () => {
  const [carts, setCatrs] = useState([]);
  const [up, setUp] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:5000/cart").then((res) => {
      setCatrs(res.data)
    });
      
  }, [up]);
  const validate=(cart)=>{
    axios.delete(`http://localhost:5000/cart/${cart._id}`).then(()=>{setUp(!up)})
 }
  return (
    <div className="beauty-container">
          
      <div className="wrapper">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="p">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg ">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Cart Information
            </h3>
          </div>
          {carts.map((e) => {
            return (
              <OneOrder cart={e} validate={validate}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SeeOrders;
