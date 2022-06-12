import React from "react";
import { SidebarData } from "./Sidebar.js";
import { NavLink } from "react-router-dom";

const Sidebar = ({ itemcounter }) => {
  const activeLink =
    "hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";

  return (
    <React.Fragment>
      <section>
        <div className="wrapper">
          {console.log(itemcounter)}
          <div className="text-white">
            {SidebarData.map((item, index) => {
              if (item.title === "My Cart") {
                return (
                  <div key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                      <span style={{ color: "pink" ,marginLeft:"10px" }}>{itemcounter}</span>
                    </NavLink>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </NavLink>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
