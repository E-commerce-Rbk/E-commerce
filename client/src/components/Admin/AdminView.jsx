import React from "react";
import { useState, useEffect } from "react";
import AdminSidebar from "../AdminSideBar/AdminSideBar.jsx";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";

function AdminView({ func, products, update }) {
  const deleteProduct = (p) => {
    axios.delete(`http://localhost:5000/product/${p}`).then(update());
  };
  return (
    <div className="admin-container ">
      <AdminSidebar></AdminSidebar>
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((e) => {
              return (
                <a href="#" class="group">
                  <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      style={{ wiedth: "300px", height: "300px" }}
                      src={e.imageUrl}
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      class="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">{e.productName}</h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">
                    {e.price} TND
                  </p>
                  <Link to="/updateProduct">
                    <button
                      type="button"
                      onClick={() => {
                        func(e);
                      }}
                      class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg
                        class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </Link>
                  <button
                    class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => deleteProduct(e._id)}
                  >
                    <svg
                      class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 511"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                    </svg>
                    Delete
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
