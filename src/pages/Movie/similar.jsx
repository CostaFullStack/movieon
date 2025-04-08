import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const Similar = ({ title }) => {
  const { id } = useParams();
  const [similar, setSimilar] = useState();

  async function getSimilar() {
    const { data } = await axios.get(`${movies}${id}/similar?${key}${language}
`);
    setSimilar(data.results);
  }

  useEffect(() => {
    getSimilar();
  }, [id]);

  return (
    <>
      {similar && similar.length > 0 && (
        <>
          <h3>Similares a "{title}":</h3>
          <CardMovies movies={similar} />
        </>
      )}
    </>
  );
};
