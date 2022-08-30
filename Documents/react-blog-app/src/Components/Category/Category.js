import React from "react";
import AllBlogs from "../AllBlogs/AllBlogs";
import "./category.css";
const Category = () => {
  return (
    <>
      <div className="category">
        <ul className="listItems">
          <li>
            <a href="##">HTML</a>
          </li>
          <li>
            <a href="##">CSS</a>
          </li>
          <li>
            <a href="##">JAVASCRIPT</a>
          </li>
          <li>
            <a href="##">REACTJS</a>
          </li>
        </ul>
        <div className="blogs">
          <AllBlogs />
        </div>
      </div>
    </>
  );
};

export default Category;
