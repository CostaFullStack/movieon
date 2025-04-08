import axios from "axios";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState();

  async function getNowPlaying() {
    const { data } = await axios.get(
      `${movies}now_playing?${key}${language}&page=2`
    );
    setNowPlaying(data.results);
  }

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <>{nowPlaying && <CardMovies genre={"Em cartaz"} movies={nowPlaying} />}</>
  );
};
