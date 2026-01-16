import React from "react";
import { connectToDatabase } from "@/mongodb";

const index = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}
    </>
  );
};

export default index;

export async function getServerSideProps() {
  // API: http://localhost:3000/api/movies

  // getting data from mongodb database
  const client = await connectToDatabase();
  const db = client.db();
  const moviesCollection = db.collection("Movies");
  const movies = await moviesCollection.find().toArray();

  return {
    props: {
      movies: movies.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
      })),
    },
  };
}
