import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="logo">
          <img src="./images/logo.png" alt="logo"></img>
        </div>

        <ul className="menu">
          <li>
            <a href="##">HOME</a>
          </li>
          <li>
            <a href="##">BLOGS</a>
          </li>
          <li>
            <a href="##">ABOUT ME</a>
          </li>
          <li>
            <a href="##">CONTACT US</a>
          </li>
        </ul>

        <div className="search">
          <input type="text" placeholder="Search...."></input>
        </div>
        <div className="profile">
          <a href="##">LOGOUT</a>
          <div className="userContainer">
            <div className="content">DB</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
