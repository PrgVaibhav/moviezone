import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, SearchMovie, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movies/:id" element={<MovieDetail />} />
      <Route path="movies/popular" element={<MovieDetail />} />
      <Route path="movies/top" element={<MovieDetail />} />
      <Route path="movies/upcoming" element={<MovieDetail />} />
      <Route path="search" element={<SearchMovie />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
