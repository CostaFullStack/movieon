import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movies = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const ProductionCompanies = () => {
  const { companyCode } = useParams();
  const [moviesByCompany, setMoviesByCompany] = useState([]);
  const [companyName, setCompanyName] = useState();
  const [page, setPage] = useState(1);

  async function getMoviesByCompany() {
    const { data } = await axios.get(
      `${discover_movies}${key}&with_companies=${companyCode}${language}&page=${page}`
    );

    setMoviesByCompany([...moviesByCompany, ...data.results]);
  }

  async function getCompanyName() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/company/${companyCode}?${key}${language}`
    );

    setCompanyName(data);
  }

  useEffect(() => {
    getMoviesByCompany();
  }, [page, companyCode]);

  useEffect(() => {
    getCompanyName();
  }, []);

  return (
    <>
      {companyName && <h3>Filmes do estúdio {companyName.name}:</h3>}
      <CardMovies movies={moviesByCompany} />
      <button onClick={() => setPage(page + 1)}>mais</button>
    </>
  );
};
