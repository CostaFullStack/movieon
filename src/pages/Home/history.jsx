import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const discover_movie = LinksApi.discoverMovie;
const language = LinksApi.traduzido;

export const History = () => {
  const [history, setHistory] = useState();

  async function getHistory() {
    const { data } = await axios.get(
      `${discover_movie}${key}&with_genres=36${language}`
    );
    setHistory(data.results);
  }

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <CardMovies genre={"História"} movies={history} />
    </>
  );
};
