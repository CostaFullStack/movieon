import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const TopRated = () => {
  const [topRated, setTopRated] = useState();

  async function getTopRated() {
    const { data } = await axios.get(`${movies}top_rated?${key}${language}`);
    setTopRated(data.results);
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <>{topRated && <CardMovies genre={"Maiores notas"} movies={topRated} />}</>
  );
};
