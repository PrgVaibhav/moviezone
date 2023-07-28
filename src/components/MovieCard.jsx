import { Link } from "react-router-dom";
import styles from "../styles/movieCard.module.scss";

import { RiMovieLine } from "react-icons/ri";

export const MovieCard = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const paragraph = overview.substring(0, 120);
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="placeholder"
          className={styles.placeholder_img}
        />
      </div>
      <Link to={`/movies/${id}`}>
        <div className={styles.card_content}>
          <RiMovieLine className={styles.movie_icon} />
          <h3>{original_title}</h3>
          <p>{paragraph}...</p>
        </div>
      </Link>
    </div>
  );
};
