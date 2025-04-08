import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const search_movie = LinksApi.searchMovie;
const language = LinksApi.traduzido;

export const SearchMovies = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      `${search_movie}?${key}&query=${query}${language}`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <>
    {query && (
      <h3>Resultados para "{query}":</h3>
    )}
    <CardMovies movies={movies}/>
    </>
  )
};
