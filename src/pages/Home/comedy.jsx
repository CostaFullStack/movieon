import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Comedy = () => {
  const [comedy, setComedy] = useState();

  async function getComedy() {
    const { data } = await axios.get(
      `${discover_movie}${key}&with_genres=35${language}`
    );
    setComedy(data.results);
  }

  useEffect(() => {
    getComedy();
  }, []);

  return (
    <>
      <CardMovies genre={"Comédia"} movies={comedy} />
    </>
  );
};
