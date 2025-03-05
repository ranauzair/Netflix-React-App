import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=drama&type=series&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
        );
        const data = await response.json();
        if (data.Search) {
          setTvShows(data.Search);
        }
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <div className="text-white text-center mt-24">
      <h2 className="text-3xl font-bold mb-6">TV Shows</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tvShows.map((show) => (
          <MovieCard key={show.imdbID} data={show} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;
