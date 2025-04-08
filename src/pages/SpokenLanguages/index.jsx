import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { TranslateSpokenLanguage } from "../../utils/spokenLanguages";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movies = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const SpokenLanguages = () => {
  const { languageCode } = useParams();
  const [moviesByLanguage, setMoviesByLanguage] = useState([]);
  const [page, setPage] = useState(1);

  async function getMoviesByLanguage() {
    const { data } = await axios.get(
      `${discover_movies}${key}${language}&with_original_language=${languageCode}&page=${page}`
    );

    setMoviesByLanguage([...moviesByLanguage, ...data.results]);
  }

  useEffect(() => {
    getMoviesByLanguage();
  }, [page, languageCode]);

  return (
    <>
      {moviesByLanguage && (
        <h3>
          Produções {TranslateSpokenLanguage({ isoLanguage: languageCode })}:
        </h3>
      )}
      <CardMovies movies={moviesByLanguage} />
      <button onClick={() => setPage(page + 1)}>↓</button>
    </>
  );
};
