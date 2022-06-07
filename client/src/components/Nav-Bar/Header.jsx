import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import * as Icons from "react-icons/fa";
import navItems from "./Nav-items";
import Button from "./Button";

const Header = () => {
  
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo ">
          Shopify
          <Icons.FaShoppingBag />
        </Link>
        <ul className="nav-items">
          {/* All the items in the navbar are imported from a file nav-items.js this file contain an 
        item with the path to link to a class name and a title for example " Login" we can map inside a ul and return an <li> passing a single item from that file */}
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button></Button>
      </nav>
    </div>
  );
};

export default Header;
