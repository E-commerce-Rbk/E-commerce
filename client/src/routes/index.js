import React from "react";
import { Redirect } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import ProductList from "../pages/Ecommerce/EcommerceProducts/index";
import ProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import AddProduct from "../pages/Ecommerce/EcommerceAddProduct";
// Dashboard
import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  // { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },
  { path: "/product", component: ProductList },
  { path: "/product-details/:id", component: ProductDetail },
  { path: "/product/new", component: AddProduct },
  { path: "/product/edit/:id", component: AddProduct },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/product" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];

export { publicRoutes, authProtectedRoutes };
