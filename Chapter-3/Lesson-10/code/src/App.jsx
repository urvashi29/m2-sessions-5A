import React from "react";
import MovieData from "./MovieData";
import MovieCount from "./MovieCount";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  return (
    <>
      <MovieProvider>
        <MovieData />
        <MovieCount />
      </MovieProvider>
    </>
  );
};

export default App;
