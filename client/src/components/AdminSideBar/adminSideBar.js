import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";  
import * as CgIcons from "react-icons/cg"
export const SidebarData = [

  {
    title: "See Orders   ",
    path: "/admin/orders",
    icon: <CgIcons.CgProfile />,
  },
  {
    title: "Add item",
    path: "/admin/add",
    icon: <AiIcons.AiOutlineShoppingCart />,
  },
  {
    title: "Logout",
    path: "/home",
    icon: <AiIcons.AiOutlineLogin />,
  },
];
