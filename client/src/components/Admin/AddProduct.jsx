import React from "react";
import AdminSidebar from "../AdminSideBar/AdminSideBar.jsx"
// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
//All this can be changed to a more React-ish version but I'll wait to check with aziz whether the dropdown is possible to fix this way or no

function AddProduct() {
  return (
    <div className="admin-container">
      <AdminSidebar></AdminSidebar>
      {" "}
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="relative inline-block text-left">
                      <div>
                        <div>
                          <label
                            id="listbox-label"
                            class="block text-sm font-medium text-gray-700"
                          >
                            {" "}
                            Categories{" "}
                          </label>
                          <div class="mt-1 relative">
                            <button
                              type="button"
                              class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              aria-haspopup="listbox"
                              aria-expanded="true"
                              aria-labelledby="listbox-label"
                            >
                              <span class="flex items-center">
                                {/* <img
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                  class="flex-shrink-0 h-6 w-6 rounded-full"
                                /> */}
                                <span class="ml-3 block truncate">
                                  {" "}
                                  Category 1{" "}
                                </span>
                              </span>
                              <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                  class="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>

                            <ul
                              class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                              tabindex="-1"
                              role="listbox"
                              aria-labelledby="listbox-label"
                              aria-activedescendant="listbox-option-3"
                            >
                              <li
                                class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                                id="listbox-option-0"
                                role="option"
                              >
                                <div class="flex items-center">
                                  {/* <img
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    class="flex-shrink-0 h-6 w-6 rounded-full"
                                  /> */}
                                  <span class="font-normal ml-3 block truncate">
                                    {" "}
                                    Category 2{" "}
                                  </span>
                                </div>

                                <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                  <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm"> $ </span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center">
                          <label for="currency" class="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                          >
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                      <label
                        for="company-website"
                        class="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Add product{" "}
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Product name.."
                        />
                      </div>
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                      <label
                        for="company-website"
                        class="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Image URL{" "}
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="URL..."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Details{" "}
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Product details..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
