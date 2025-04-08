import { use, useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const SciFi = () => {
  const [sciFi, setSciFi] = useState();

  async function getSciFi() {
    const { data } = await axios.get(
      `${discover_movie}${key}&with_genres=878${language}`
    );

    setSciFi(data.results);
  }

  useEffect(() => {
    getSciFi();
  }, []);

  return (
    <>
      <CardMovies genre={"Ficção Ciêntifica"} movies={sciFi} />
    </>
  );
};
