import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div
        className="nav-logo"
        onClick={() => {
          setMenu("shop");
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("desktops");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/desktops"
          >
            Desktops
          </Link>
          {menu === "desktops" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("laptops");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/laptops"
          >
            Laptops
          </Link>
          {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("others");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="others">
            Others
          </Link>
          {menu === "others" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>log in</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#ff6347", fontSize: "24px" }}
          />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
