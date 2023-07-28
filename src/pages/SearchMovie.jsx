import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MovieCard, LoadingSpinner } from "../components";
import styles from "../styles/movieCard.module.scss";
import style from "../styles/searchMovie.module.scss";
export const SearchMovie = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { result: movies, isLoading } = useFetch(apiPath, query);

  return (
    <main>
      <p className={style.para}>
        {movies.length === 0
          ? `No result found for ${query}`
          : `${movies.length} result found for '${query}'`}
      </p>
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
