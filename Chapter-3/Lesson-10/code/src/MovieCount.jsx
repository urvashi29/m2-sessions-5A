import React, { useContext } from "react";
import { MovieContext } from "./context/MovieProvider";

const MovieCount = () => {
  const movies = useContext(MovieContext);

  return <>{movies.length}</>;
};

export default MovieCount;
