import React, { useContext, useReducer, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import { MovieContext } from "./context/MovieProvider";

const MovieData = ({ update }) => {
  const movies = useContext(MovieContext);

  return (
    <>
      <DisplayMovies movies={movies} />
    </>
  );
};

export default MovieData;
