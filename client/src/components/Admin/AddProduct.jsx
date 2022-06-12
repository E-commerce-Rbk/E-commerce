import React from "react";
import AdminSidebar from "../AdminSideBar/AdminSideBar.jsx";
import axios from "axios";

// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
//All this can be changed to a more React-ish version but I'll wait to check with aziz whether the dropdown is possible to fix this way or no

export default class AddProd extends React.Component {
  constructor() {
    super();
    this.state = {
      ProdName: "",
      ImageURL: "",
      Details: "",
      Price: 0,
      Category: "",
      Stock: 0,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let prod = {
      productName: this.state.ProdName,
      category: this.state.Category,
      price: this.state.Price,
      imageUrl: this.state.ImageURL,
      stock: this.state.Stock,
      description: this.state.Details,
    };
    console.log(prod);

    axios
      .post("http://localhost:5000/product", prod)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.Category);
    return (
      <div className="admin-container">
        <AdminSidebar></AdminSidebar>{" "}
        <div>
          <div className="p1">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div>
                          <select
                            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            onChange={(e) =>
                              this.setState({ Category: e.target.value })
                            }
                          >
                            <option selected>CATEGORY</option>
                            <option value="Jewlery and Watches">
                              Jewlery and Watches
                            </option>
                            <option value="Home And Garden">
                              Home And Garden
                            </option>
                            <option value="Computer Electronic">
                              Computer Electronic
                            </option>
                            <option value="Beauty Product">
                              Beauty Product
                            </option>
                          </select>
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
                              onChange={(e) =>
                                this.setState({
                                  Price: parseInt(e.target.value),
                                })
                              }
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <label for="currency" class="sr-only">
                                Currency
                              </label>
                            </div>
                          </div>
                          <label
                            for="price"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Stock
                          </label>
                          <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                            <input
                              type="text"
                              name="price"
                              id="price"
                              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                              placeholder="0"
                              onChange={(e) =>
                                this.setState({
                                  Stock: parseInt(e.target.value),
                                })
                              }
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <label for="currency" class="sr-only">
                                Currency
                              </label>
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
                              onChange={(e) =>
                                this.setState({ ProdName: e.target.value })
                              }
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
                              onChange={(e) =>
                                this.setState({ ImageURL: e.target.value })
                              }
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
                            onChange={(e) =>
                              this.setState({ Details: e.target.value })
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={(e) => this.handleSubmit(e)}
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
      </div>
    );
  }
}
