import { MovieCard } from "./MovieCard";
import styles from "../styles/movieCard.module.scss";
import { useFetch, useDocumentTitle } from "../hooks";
import { LoadingSpinner } from "../components";

export const MovieList = ({ apiPath, name, title }) => {
  const { result: movies, isLoading } = useFetch(apiPath);

  useDocumentTitle(title);

  return (
    <main>
      {name && <h3 className={styles.title}>{name}</h3>}
      {isLoading ? (
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
