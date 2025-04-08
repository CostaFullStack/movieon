import { useEffect, useState } from "react";
import { LinksApi } from "../../utils/linksApi";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CardMovies } from "../../components/Molecule/CardMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const language = LinksApi.traduzido;

export const Recommended = ({ title }) => {
  const { id } = useParams();
  const [recommended, setRecommended] = useState();

  async function getRecommended() {
    const { data } =
      await axios.get(`${movies}${id}/recommendations?${key}${language}
`);
    setRecommended(data.results);
  }

  useEffect(() => {
    getRecommended();
  }, [id]);

  return (
    <>
      {recommended && recommended.length > 0 && (
        <>
          <h3>Se você gostou de "{title}":</h3>
          <CardMovies movies={recommended} />
        </>
      )}
    </>
  );
};
