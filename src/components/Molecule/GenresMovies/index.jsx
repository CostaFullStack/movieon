import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GenresMovies = ({ movie }) => {
  const navigate = useNavigate();
  const [searchGenre, setSearchGenre] = useState();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setSearchGenre(!searchGenre)}
        >
          Gêneros
        </p>

        {searchGenre && (
          <p>
            {movie.genres &&
              movie.genres.map((genre, element, array) => (
                <span onClick={() => navigate(`/filmes/genero/${genre.id}`)}>
                  {genre.name}
                  {element < array.length - 1 && ", "}
                </span>
              ))}
          </p>
        )}
      </div>
    </>
  );
};
