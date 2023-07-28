import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { LoadingSpinner } from "../components";
import placeholder from "../assets/p.avif";
import styles from "../styles/movieDetail.module.scss";

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function fetchMovieDetail() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setMovieDetail(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchMovieDetail();
  }, [params.id]);

  const image = movieDetail.poster_path
    ? `https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`
    : placeholder;

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <main>
          <section className={styles.movie_detail_container}>
            <div className={styles.image_section}>
              <img src={image} alt={movieDetail.title} />
            </div>
            <div className={styles.content_section}>
              <h2 className={styles.movie_title}>
                {movieDetail.original_title}
              </h2>
              <p className={styles.para}>{movieDetail.overview}</p>

              <div className={styles.genres}>
                {movieDetail.genres &&
                  movieDetail.genres.map((genre) => {
                    return <p key={genre.id}>{genre.name}</p>;
                  })}
              </div>
              <div className={styles.language_and_rating}>
                <p className={styles.language}>
                  {movieDetail.original_language}
                </p>
                <div className={styles.rating}>
                  <span className={styles.avg}>
                    <BsStarFill className={styles.star_icon} />{" "}
                    {Math.round(movieDetail.vote_average)}
                  </span>
                  <span className={styles.dot}></span>
                  <span className={styles.count}>{movieDetail.vote_count}</span>
                </div>
              </div>
              <div className={styles.other_details}>
                <p>
                  <span className={styles.bold}>Runtime:</span>{" "}
                  {movieDetail.runtime} min
                </p>
                <p>
                  <span className={styles.bold}>Budget:</span> $
                  {movieDetail.budget && movieDetail.budget.toLocaleString()}
                </p>
                <p>
                  <span className={styles.bold}>Revenue:</span> $
                  {movieDetail.revenue && movieDetail.revenue.toLocaleString()}
                </p>
                <p>
                  <span className={styles.bold}>Release Date: </span>
                  {movieDetail.release_date}
                </p>
                {movieDetail.homepage && (
                  <p>
                    <span className={styles.bold}>Homepage: </span>
                    <a
                      href={movieDetail.homepage}
                      rel="noreferrer"
                      aria-label="Homepage of movies"
                      target="_blank"
                      className={styles.link}
                    >
                      {movieDetail.original_title}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
