import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const Movies = () =>{
    const [movies, setMovies] =useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?s=action&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
                );
                const data = await response.json();
                if (data.Search) {
                    setMovies(data.Search);
                }
            } catch (error) {
                console.error("Error fetching movies:", error); 
            }
        };
        fetchMovies();
    }, []);

  return (
    <div className="text-white text-center mt-24">
      <h2 className="text-3xl font-bold mb-6">Action Movies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie} />
        ))}
      </div>
    </div>
  );

};

export default Movies;
