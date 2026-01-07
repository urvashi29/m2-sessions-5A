import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{ background: "teal" }}>
        <ul
          style={{
            listStyle: "none",
            textDecoration: "none",
            display: "flex",
            padding: "20px",
            gap: "10px",
          }}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/employees">Employee</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// in html
// <a href="./about.html">About </a>
