import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    fetchMovies("All");
  }, []);

  useEffect(() => {
    updateArrows();
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", updateArrows);
    }
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", updateArrows);
      }
    };
  }, [movies]);

  const fetchMovies = async (genre) => {
    try {
      const query = genre === "All" ? "movie" : genre.toLowerCase();
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
        setTimeout(updateArrows, 0);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(updateArrows, 350);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(updateArrows, 350);
    }
  };

  const updateArrows = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setHasPrev(scrollLeft > 0);
      setHasNext(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  return (
    <div className="relative w-screen mx-auto mt-24">
      <div className="flex gap-4 mb-4">
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => fetchMovies("All")}>
          All
        </button>
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => fetchMovies("Action")}>
          Action
        </button>
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => fetchMovies("Drama")}>
          Drama
        </button>
      </div>

      <div className="relative">
        {hasPrev && (
          <button
            className="absolute left-5 top[24%] -translate-y-1/2 bg-black/5 text-white p-6 text-5xl rounded-full z-10 hover:bg-black/5 transition duration-300"
            onClick={scrollLeft}
          >
            ‹
          </button>
        )}
        {hasNext && (
          <button
            className="absolute right-5 top[24%] -translate-y-1/2 bg-black/5 text-white p-6 text-5xl rounded-full z-10 hover:bg-black/5 transition duration-300"
            onClick={scrollRight}
          >
            ›
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-hidden px-12"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
