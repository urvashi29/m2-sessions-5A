import React from "react";

const DisplayMovies = ({ movies }) => {
    
  const movieList = movies.length ? (
    movies.map((movie) => {
      return <p>{movie.movieName}</p>;
    })
  ) : (
    <p>No Post Yet!</p>
  );

  return <>{movieList}</>;
};

export default DisplayMovies;
