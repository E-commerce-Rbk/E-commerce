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
import SeeOrders from "./components/Admin/SeeOrders.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import UpdateProduact from "./components/Admin/UpdateProduct.jsx";

import { useNavigate } from "react-router-dom";
import { login } from "./api/index.js";
const App = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [user, setUser] = useState({});
  const [prodDetails, setProdDetails] = useState({});
  const [cart, setCart] = useState({});

  const [itemcounter, setitemcounter] = useState(0);

  const increment = () => {
    setitemcounter(itemcounter + 1);
  };

  const deccrement = () => {
    if (itemcounter > 0) {
      setitemcounter(itemcounter - 1);
    }
  };

  const [upProduct, setUpProduct] = useState({});


  useEffect(() => {
    getProducts().then((res) => setData(res.data));
    let check = JSON.parse(localStorage.getItem("loged"));
    if (check) {
      login({ token: check.token }).then((res) => {
        console.log(res);
        if (res.data) {
          setUser(res.data);
          setCart({ userId: res.data.id, products: [] });
        }
      });
    }
  }, [update]);
  const upDate = () => {
    setUpdate(!update);
  };
  const logout = () => {
    localStorage.clear();
    setUser({});
  };
  const addToCart = (obj) => {
    setCart({ userId: cart.userId, products: [...cart.products, obj] });
  };
  // const navigate= useNavigate()
  const FuncprodDetails = (target) => {
    let filterd = data.filter((e, i) => {
      return e._id === target;
    });
    setProdDetails(filterd);
  };
  const up = (p) => {
    setUpProduct(p);
  };
  return (
    <BrowserRouter>
      {console.log(cart)}
      <Header user={user} logout={logout}></Header>
      <Routes>
        <Route
          path="/updateProduct"
          element={<UpdateProduact update={upDate} item={upProduct} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login upDate={upDate} />} />
        <Route path="/signup" element={<Signup upDate={upDate} />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<ProductsNavigator />} />
        <Route
          path="/products/beauty"

          element={
            <Beauty
              GetProdDetails={FuncprodDetails}
              itemcounter={itemcounter}
            />
          }
        />

          
        <Route
          path="/adminview"
          element={<AdminView update={upDate} products={data} func={up} />}
        />

        <Route
          path="/products/watchesAndJewlery"
          element={<WatchesAndJewlery GetProdDetails={FuncprodDetails} />}
        />
        <Route
          path="/products/electronic"
          element={<Electronic GetProdDetails={FuncprodDetails} />}
        />

        <Route path="/user" element={<User conectedUser={user}></User>} />

        <Route
          path="/products/homeAndGarden"
          element={<HomeAndGarden GetProdDetails={FuncprodDetails} />}
        />
        <Route
          path="/products/WatchesAndJewlery"
          element={<WatchesAndJewlery GetProdDetails={FuncprodDetails} />}
        />
        <Route path="/userSettings" element={<User></User>} />
        <Route
          path="/cartshop"
          element={
            <ShoppingCart
              cart={cart}
              user={user}
              deccrement={deccrement}
            ></ShoppingCart>
          }

        />
        <Route path="/admin/add" element={<AddProduct></AddProduct>} />

        <Route path="admin/orders" element={<SeeOrders></SeeOrders>} />
        <Route
          path="/productDetails"
          element={
            <ProductDetails
              prodDetails={prodDetails}
              addToCart={addToCart}
              cart={cart}
              increment={increment}

            ></ProductDetails>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
