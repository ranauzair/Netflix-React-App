import React, { useRef, useState, useEffect } from "react";
import moviesData from "../../api/moviesData.json";
import MovieCard from "../MovieCard";

const MovieCarousel = () => {
  const sliderRef = useRef(null);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

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
  }, []);

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

  const filterMovies = (genre) => {
    if (genre === "All") {
      setFilteredMovies(moviesData);
    } else {
      setFilteredMovies(moviesData.filter((movie) => movie.genre.includes(genre)));
    }
  };

  return (
    <div className="relative w-screen mx-auto mt-24">
      <div className="flex gap-4 mb-4">
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => filterMovies("All")}>
          All
        </button>
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => filterMovies("Action")}>
          Action
        </button>
        <button className="p-2 bg-gray-500 text-white rounded" onClick={() => filterMovies("Drama")}>
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
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
