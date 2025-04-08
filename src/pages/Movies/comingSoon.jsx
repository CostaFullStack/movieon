import axios from "axios";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const ComingSoon = () => {
  const [comingSoon, setComingSoon] = useState();

  async function getComingSoon() {
    const { data } = await axios.get(`${movies}upcoming?${key}${language}
  `);
    setComingSoon(data.results);
  }

  useEffect(() => {
    getComingSoon();
  }, []);

  return (
    <>{comingSoon && <CardMovies genre={"Em breve"} movies={comingSoon} />}</>
  );
};
