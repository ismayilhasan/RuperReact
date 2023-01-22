import React from "react";
import { useAppContext } from "../../context/App";
import "./style.scss";

function Sidebar() {
  const [{ sidebar,toggleSidebar }] = useAppContext();
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <i className="fa-solid fa-house-user"></i>Home
      </li>
      <li>
        <i className="fa-solid fa-cart-shopping"></i>Products
      </li>
      <li>
        <i className="fa-solid fa-phone"></i>Carrer
      </li>
      <li>
        <i className="fa-solid fa-address-book"></i>Contact Us
      </li>
      <li>
        <i className="fa-solid fa-user"></i>About Us
      </li>
      <i className="fa-solid fa-xmark close-icon-sidebar" onClick={toggleSidebar}></i>
    </div>
  );
}

export default Sidebar;
