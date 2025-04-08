import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";
import { GenresList } from "../../utils/genresList";

const key = LinksApi.key;
const discover_movies = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Genres = () => {
  const { id } = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [page, setPage] = useState(1);

  async function getMoviesByGenre() {
    const { data } =
      await axios.get(`${discover_movies}${key}${language}&with_genres=${id}&page=${page}

`);

    setMoviesByGenre([...moviesByGenre, ...data.results]);
  }

  useEffect(() => {
    getMoviesByGenre();
  }, [page, id]);

  return (
    <>
      {moviesByGenre && <h3>Filmes do gênero {GenresList[id]}: </h3>}

      <CardMovies movies={moviesByGenre} />
      <button onClick={() => setPage(page + 1)}>mais</button>
    </>
  );
};
