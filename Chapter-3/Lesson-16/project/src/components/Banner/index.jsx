import React from "react";
import { Parallax, Background } from "react-parallax";

const index = ({ type, bgURL }) => {
  return (
    <Parallax strength={300}>
      <h2>{type}</h2>
      <Background>
        <img src={bgURL} alt="fill murray" />
      </Background>
    </Parallax>
  );
};

export default index;
