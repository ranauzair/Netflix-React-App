import React from "react";
import styles from "./Netflix.module.css";

const MovieCard = ({ data }) => {
  if (!data) return null;

  const {
    Poster = "",
    Title = "Unknown",
    Year = "N/A",
    imdbID,
  } = data;

  return (
    <li className={`${styles.card} w-[200px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg bg-gray-900`}>
      <a
        href={`https://www.imdb.com/title/${imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Poster !== "N/A" ? Poster : "/images/placeholder.png"}
          alt={Title}
          className="w-full h-full object-cover cursor-pointer"
        />
      </a>
      <div className="p-2 text-white text-center">
        <h2 className="text-sm font-semibold">{Title}</h2>
        <p className="text-xs">Year: {Year}</p>
      </div>
    </li>
  );
};

export default MovieCard;
