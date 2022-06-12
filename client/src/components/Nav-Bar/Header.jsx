import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import * as Icons from "react-icons/fa";
import navItems from "./Nav-items";
import Button from "./Button";
import { useState } from "react";

const Header = (props) => {
  





  return (
    <div>
      {console.log(props.logout)}
      <nav className="navbar">
        <Link to="/" className="navbar-logo ">
          Shopify
          <Icons.FaShoppingBag />
        </Link>
        <ul className="nav-items">
          {/* All the items in the navbar are imported from a file nav-items.js this file contain an 
        item with the path to link to a class name and a title for example " Login" we can map inside a ul and return an <li> passing a single item from that file */}
          <li key="1" className="nav-item">
            <Link to="./">Home</Link>
          </li>
          <li key="2" className="nav-item">
            <Link to="./aboutus">About-us</Link>
          </li>
          <li key="3" className="nav-item">
            <Link to="./products">Shop</Link>
          </li>
          {props.user.type==="admin" && (
            <li key="4" className="nav-item">
              <Link to="./adminview">Admin</Link>
            </li>
          )}
          {!props.user.type &&<li key="5" className="nav-item">
            <Link to="./login">Login</Link>
          </li>}
          {props.user.type &&<li key="5" className="nav-item">
            <Link onClick={()=>props.logout()} to="./">logout</Link>
          </li>}
        </ul>
        {!props.user.type &&<Button></Button>}
      </nav>
    </div>
  );
};

export default Header;

// {navItems.map((item) => {
//   return (
//     <li key={item.id} className={item.cName}>
//       <Link to={item.path}>{item.title}</Link>
//     </li>
//   );
