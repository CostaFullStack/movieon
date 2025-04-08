import { useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { useEffect } from "react";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const Horror = () => {
  const [horror, setHorror] = useState();

  async function getHorror() {
    const { data } = await axios.get(
      `${discover_movie}${key}&with_genres=27${language}`
    );

    setHorror(data.results);
  }

  useEffect(() => {
    getHorror();
  }, []);

  return (
    <>
      <CardMovies genre={"Terror"} movies={horror} />
    </>
  );
};
