import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { TranslateProductionCountry } from "../../utils/productionCountries";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movies = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const ProductionCountries = () => {
  const { countryCode } = useParams();
  const [moviesByCountry, setMoviesByCountry] = useState([]);
  const [page, setPage] = useState(1);

  async function getMoviesByCountry() {
    const { data } = await axios.get(
      `${discover_movies}${key}${language}&with_origin_country=${countryCode}&page=${page}`
    );
    setMoviesByCountry([...moviesByCountry, ...data.results]);
  }

  useEffect(() => {
    getMoviesByCountry();
  }, [page, countryCode]);

  return (
    <>
      {moviesByCountry && (
        <h3>
          Produções {TranslateProductionCountry({ countryISO: countryCode })}:
        </h3>
      )}
      <CardMovies movies={moviesByCountry} />
      <button onClick={() => setPage(page + 1)}>↓</button>
    </>
  );
};
