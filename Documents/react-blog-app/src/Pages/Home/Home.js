import React from "react";
import AllBlogs from "../../Components/AllBlogs/AllBlogs";
import Category from "../../Components/Category/Category";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Category />
      </div>
    </div>
  );
};

export default Home;
