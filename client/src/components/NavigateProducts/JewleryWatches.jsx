import React from "react";
import { useNavigate } from "react-router-dom";
const JewleryAndWatches = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">
                      Checkour newest collection of{" "}
                    </span>
                    <span class="block text-yellow-600 xl:inline">
                      Watches and jewlery
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Jewelry And Watches : Free Shipping on Everything at
                    Overstock - Your Online Jewelry Watches Store! Get 5% in
                    rewards with Club O!
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/products/beauty");
                        }}
                      >
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://i.pinimg.com/originals/c6/47/1a/c6471a0e86aab1e3454911e905e9963b.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewleryAndWatches;