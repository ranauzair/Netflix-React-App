import React from "react";
import moviesData from "../../api/moviesData.json";
import MovieCard from "../MovieCard";

const Movies = () =>{
    const actionMovies = moviesData.filter((movie) => movie.genre.includes("Action"));

  return (
    <div className="text-white text-center mt-24">
      <h2 className="text-3xl font-bold mb-6">Action Movies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {actionMovies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );

};

export default Movies;
