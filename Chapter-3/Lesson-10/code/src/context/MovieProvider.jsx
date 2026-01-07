import React, { createContext, useEffect, useState } from "react";
import MovieData from "../MovieData";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "Bandersnatch",
      genre: "sci-fiction",
      price: 20,
    },
    {
      id: 2,
      movieName: "Inception",
      genre: "thriller",
      price: 24,
    },
    {
      id: 3,
      movieName: "Tau",
      genre: "futuristic",
      price: 15,
    },
  ]);

  //   useEffect(() => {
  //     // api call
  //   }, []);

  console.log(children);
  return (
    <>
      <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
    </>
  );
};

export default MovieProvider;
