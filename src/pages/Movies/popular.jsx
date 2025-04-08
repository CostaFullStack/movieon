import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const Popular = () => {
  const [popular, setPopular] = useState();

  async function getPopular() {
    const { data } = await axios.get(`${movies}popular?${key}${language}`);
    setPopular(data.results);
  }

  useEffect(() => {
    getPopular();
  }, []);

  return <>{popular && <CardMovies genre={"Populares"} movies={popular} />}</>;
};
