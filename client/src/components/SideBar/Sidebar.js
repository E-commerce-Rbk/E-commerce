import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";  
import * as CgIcons from "react-icons/cg"
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "My profile   ",
    path: "/userSettings",
    icon: <CgIcons.CgProfile />,
  },
  {
    title: "My Cart",
    path: "/cartshop",
    icon: <AiIcons.AiOutlineShoppingCart />,
  },
  {
    title: "Logout",
    path: "/php",
    icon: <AiIcons.AiOutlineLogin />,
  },
];
