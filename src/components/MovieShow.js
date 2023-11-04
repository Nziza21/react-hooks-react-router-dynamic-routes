import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();

  const selectedMovie = movies[movieId];

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>Description: {selectedMovie.description}</p>
      <p>Release Date: {selectedMovie.releaseDate}</p>
    </div>
  );
}

export default MovieShow;
