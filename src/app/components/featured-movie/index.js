import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./style.module.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://i0.wp.com/defendernetwork.com/wp-content/uploads/2022/10/Wakanda-forever.jpeg?fit=1200%2C675&ssl=1${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;