import { Routes, Route } from "react-router-dom";
import { MovieDetail, SearchMovie, PageNotFound } from "../pages";
import { MovieList } from "../components";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={
            <MovieList apiPath="movie/popular" name="Popular" title="Popular" />
          }
        />
        <Route
          path="movies/top"
          element={
            <MovieList
              apiPath="movie/top_rated"
              name="Top Rated"
              title="Top Rated"
            />
          }
        />
        <Route
          path="movies/upcoming"
          element={
            <MovieList
              apiPath="movie/upcoming"
              name="Upcoming"
              title="Upcoming"
            />
          }
        />
        <Route path="search" element={<SearchMovie apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
