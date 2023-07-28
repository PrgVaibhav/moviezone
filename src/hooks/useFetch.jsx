import { useState, useEffect } from "react";

export const useFetch = (apiPath, query = "") => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.results);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [url]);

  return { result, isLoading };
};
