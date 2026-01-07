import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <Banner type="about" imgUrl="" />
      <Link to="/employees">Emp</Link>
    </div>
  );
};

export default About;

// Banner
