import { useSearchParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesBar } from "../../components/Molecule/CategoriesBar";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Categories = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const cat = searchParams.get("t");
  const [moviesByCategory, setMoviesByCategory] = useState();

  async function getMoviesByCategory() {
    const { data } =
      await axios.get(`${discover_movie}${key}&with_genres=${query}${language}
`);
    setMoviesByCategory(data.results);
  }

  useEffect(() => {
    getMoviesByCategory();
  }, [query]);

  return (
    <>
      <CategoriesBar cat={"categoria"} />
      {cat && <h3>Filmes do gênero "{cat}":</h3>}
      <CardMovies movies={moviesByCategory} />
    </>
  );
};
