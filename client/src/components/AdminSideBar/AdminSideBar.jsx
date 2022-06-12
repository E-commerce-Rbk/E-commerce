import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./adminSideBar.js";

const AdminSidebar = ({logout}) => {
  const activeLink =
    "hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";

  return (
    <React.Fragment>
      <section>
        <div className="wrapper">
          {console.log(logout)}
          <div className="text-white">
            {SidebarData.map((item, index) => {
              if (item.title === "Logout") {
                return (
                  <div key={index} >
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

export default AdminSidebar;
