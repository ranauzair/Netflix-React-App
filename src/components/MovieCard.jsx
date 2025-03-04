import React from "react";
import styles from "./Netflix.module.css";

const MovieCard = ({ data }) => {
  if (!data) return null;

  const {
    img_url = "",
    name = "Unknown",
    description = "No description available.",
    genre = [],
    watch_url = "#",
  } = data;

  return (
    <li className={styles.card}>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <img src={img_url} alt={name} className="cursor-pointer" />
      </a>
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Genre: {genre.length > 0 ? genre.join(", ") : "N/A"}</p>
      </div>
    </li>
  );
};

export default MovieCard;
