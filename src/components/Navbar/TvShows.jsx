import React from "react";
import moviesData from "../../api/moviesData.json";
import MovieCard from "../MovieCard";

const TvShows = () =>{
    const tvShows = moviesData.filter((movie) => movie.genre.includes("Drama"));

  return (
    <div className="text-white text-center mt-24">
      <h2 className="text-3xl font-bold mb-6">TV Shows</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tvShows.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );

};

export default TvShows;
