import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import green from "../../img/Group.png";
import logo from "../../img/Logout.png";
import vec from "../../img/Vector.png";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar continer">
      <NavLink className="navbar__logo" to={"/"}>
        <span>
          <img src={green} alt="" />
        </span>
      </NavLink>
      <div className={`nav_bot_flex ${toggle ? "show" : " "}`}>
        <div className="nav">
          <div className="a_flex">
            <NavLink to={"/"}>
              <a href="">Home</a>
            </NavLink>
          </div>
          <div className="a_flex">
            <a href="">Shop</a>
          </div>
          <div className="a_flex">
            <a href="">Plant Care</a>
          </div>

          <div className="a_flex">
            <a href="">Blogs</a>
          </div>
        </div>
        <button className="menu" onClick={() => setToggle(!toggle)}>
          <GrClose />
        </button>
      </div>
      <div className="nav">
        <NavLink to={"/wishlist"}>
          <FaRegHeart className="cart_nav" />
        </NavLink>
        <NavLink to={"/cart"}>
          <img src={vec} alt="" />
        </NavLink>
        <button className="login">
          <img src={logo} alt="" /> Login
        </button>
        <button className="menu" onClick={() => setToggle(!toggle)}>
          <CiMenuBurger />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
