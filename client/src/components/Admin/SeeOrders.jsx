import AdminSidebar from "../AdminSideBar/AdminSideBar.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SeeOrdres.css";

const SeeOrders = () => {
  const [carts, setCatrs] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/cart").then((res) => setCatrs(res.data));
  }, []);
  const getUserById = (p) => {
    axios
      .get(`http://localhost:5000/user/${p}`)
      .then((res) => setUser(res.data));
  };
  const getProductById = async (p) => {
    let objProd = await axios.get(`http://localhost:5000/product/${p}`);
    return objProd.data;
  };
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
              <div class="border-t border-gray-200">
                <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">UeserName</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      @@@@@@@
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Phone Number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      99999999
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Products</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul
                        role="list"
                        class="border border-gray-200 rounded-md divide-y divide-gray-200"
                      >
                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">
                              product2
                            </span>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SeeOrders;
