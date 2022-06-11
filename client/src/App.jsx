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
import User from "./components/User/User.jsx";
import ShoppingCart from "./components/Cartshop/ShoppingCart.jsx";
import AdminView from "./components/Admin/AdminView.jsx";
import AddProduct from "./components/Admin/AddProduct.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import { useNavigate } from "react-router-dom";
const App = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [adminState, setAdminState] = useState(true);
  const [userState, setUserState] = useState(false);
  const [prodDetails, setProdDetails] = useState({});

  useEffect(() => {
    getProducts().then((res) => setData(res.data));
  }, [update]);
  const upDate = () => {
    setUpdate(!update);
  };
  // const navigate= useNavigate()
  const FuncprodDetails = (target) => {
    let filterd = data.filter((e, i) => {
      return  e._id === target;
    });
    setProdDetails(filterd);
  };
  return (
    <BrowserRouter>
      <Header adminState={adminState} userState={userState}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<ProductsNavigator />} />
        <Route path="/products/beauty" element={<Beauty GetProdDetails={FuncprodDetails}/>} />
        <Route path="/adminview" element={<AdminView></AdminView>} />
        <Route
          path="/products/watchesAndJewlery"
          element={<WatchesAndJewlery />}
        />
        <Route path="/products/electronic" element={<Electronic />} />
        <Route path="/products/homeAndGarden" element={<HomeAndGarden />} />
        <Route path="/userSettings" element={<User></User>} />
        <Route path="/cartshop" element={<ShoppingCart></ShoppingCart>} />
        <Route path="/admin/add" element={<AddProduct></AddProduct>} />
        <Route path="/productDetails" element={<ProductDetails prodDetails={prodDetails}></ProductDetails>}  />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
