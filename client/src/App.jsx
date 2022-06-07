import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import { getProducts } from "./api/index.js";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Sign-up/Signup.jsx";
import Header from "./components/Nav-Bar/Header.jsx";
import About from "./components/About-us/About.jsx";
import ProductsNavigator from "./components/NavigateProducts/ProductsNavigator.jsx";
import Beauty from "./components/ProductsByCategory/Beauty.jsx";
import WatchesAndJewlery from "./components/ProductsByCategory/WatchesAndJewlery";
import Electronic from "./components/ProductsByCategory/Electronic.jsx";
import HomeAndGarden from "./components/ProductsByCategory/GardenProduct";
const App = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    getProducts().then((res) => setData(res.data));
  }, [update]);
  const upDate = () => {
    setUpdate(!update);
  };
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<ProductsNavigator />} />
        <Route path="/products/beauty" element={<Beauty />} />
        <Route path="/products/watchesAndJewlery" element={<WatchesAndJewlery />} />
        <Route path="/products/electronic" element={<Electronic />} />
        <Route path="/products/homeAndGarden" element={<HomeAndGarden />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
