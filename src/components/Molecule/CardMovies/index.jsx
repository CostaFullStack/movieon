import { useNavigate } from "react-router-dom";
import { LinksApi } from "../../../utils/linksApi";
import { Container } from "../../Organism/Container";
import { DivMovies } from "../../../utils/globalStyle";

const img = LinksApi.img;
const img_notFound = LinksApi.img_movie_notFound;

export const CardMovies = ({ movies, genre }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>{genre}</h1>
      <Container>
        {movies &&
          movies.map((movie) => (
            <DivMovies>
              <h2>{movie.title}</h2>
              <img
                onClick={() => navigate(`/filme/${movie.id}`)}
                width={250}
                src={
                  movie.poster_path
                    ? `${img}/${movie.poster_path}`
                    : img_notFound
                }
                alt={`Imagem do filme ${movie.title}`}
              />
            </DivMovies>
          ))}
      </Container>
    </>
  );
};
