import { MovieCard } from "./MovieCard";
import styles from "../styles/movieCard.module.scss";
import { useFetch } from "../hooks/useFetch";
import { LoadingSpinner } from "../components";

export const MovieList = ({ apiPath }) => {
  const { result: movies, loading } = useFetch(apiPath);

  return (
    <main>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className={styles.cards}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </main>
  );
};