import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movies = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Year = () => {
  const { year } = useParams();
  const [moviesByYear, setMoviesByYear] = useState([]);
  const [page, setPage] = useState(1);

  async function getMoviesByYear() {
    const { data } = await axios.get(
      `${discover_movies}${key}&primary_release_year=${year}${language}&page=${page}`
    );

    `${discover_movies}${key}&primary_release_year=${year}&language=pt-BR&page=${page}`;
    setMoviesByYear([...moviesByYear, ...data.results]);
  }

  useEffect(() => {
    getMoviesByYear();
  }, [page, year]);

  return (
    <>
      {year && <h3>Filmes de {year.slice(0, 4)}: </h3>}
      <CardMovies movies={moviesByYear} />
      <button onClick={() => setPage(page + 1)}>↓</button>
    </>
  );
};
