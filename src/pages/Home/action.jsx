import axios from "axios";
import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Action = () => {
  const [action, setAction] = useState();

  async function getAction() {
    const { data } = await axios.get(
      `${discover_movie}${key}&with_genres=28${language}`
    );
    setAction(data.results);
  }

  useEffect(() => {
    getAction();
  }, []);

  return (
    <>
    <CardMovies genre={"Ação"} movies={action}/>
    </>
  )
};
