import { useNavigate, useParams } from "react-router-dom";
import { LinksApi } from "../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListCrew } from "../../components/Molecule/ListCrew";
import { ListCast } from "../../components/Molecule/ListCast";
import { DetailsMovie } from "../../components/Molecule/DetailsMovies";
import { Recommended } from "./recommended";
import { Similar } from "./similar";
import { GenresMovies } from "../../components/Molecule/GenresMovies";

const key = LinksApi.key;
const movies = LinksApi.movies;
const img = LinksApi.img;
const img_notFound = LinksApi.img_movie_notFound;
const language = LinksApi.traduzido;
const language_english = LinksApi.traduzido_english;

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieById, setMovieById] = useState();
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);

  async function getMovieById() {
    const { data } = await axios.get(`${movies}${id}?${key}${language}`);

    if (
      !data.overview ||
      !data.tagline ||
      (data.title === data.original_title && data.original_title !== "pt")
    ) {
      const { data: dataEnglish } = await axios.get(
        `${movies}${id}?${key}${language_english}`
      );

      data.overview = data.overview || dataEnglish.overview;
      data.tagline = data.tagline || dataEnglish.tagline;

      if (data.title === data.original_title && data.original_title !== "pt") {
        data.title = dataEnglish.title;
      }

      const normalizedTitle = data.title?.toLowerCase().trim();

      if (normalizedTitle === "para sempre lilya") {
        data.tagline = "Só lhe resta sobreviver";
      }

      if (normalizedTitle === "yonlu") {
        data.tagline = "Now my suicide is lit by the sunset..";
      }
    }

    setMovieById(data);
  }

  async function getCastAndCrew() {
    const { data } = await axios.get(
      `${movies}${id}/credits?${key}${language_english}`
    );

    setCrew(data.crew);
    setCast(data.cast);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieById();
    getCastAndCrew();
  }, [id]);

  return (
    <>
      {movieById && (
        <div>
          <img
            width={250}
            src={
              movieById.poster_path
                ? `${img}/${movieById.poster_path}`
                : img_notFound
            }
            alt={`Imagem do filme ${movieById.title}`}
          />

          <div style={{ display: "flex", gap: 5 }}>
            <h1>{movieById.title}</h1>
            {/* escolher depois entre o if ternário e o && || */}
            <p
              onClick={() =>
                navigate(`/filmes/ano/${movieById.release_date.slice(0, 4)}`)
              }
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {(movieById.release_date && movieById.release_date.slice(0, 4)) ||
                !movieById}
            </p>
            <p style={{ fontStyle: "italic" }}>'{movieById.original_title}'</p>

            {crew.filter((person) => person.job === "Director").length > 0 ? (
              <p>
                Dirigido por{" "}
                {crew
                  .filter((person) => person.job === "Director")
                  .map((director, element, array) => (
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => navigate(`/equipe/${director.id}`)}
                    >
                      {director.name}
                      {element < array.length - 1 && ", "}
                    </span>
                  ))}
              </p>
            ) : (
              "Indisponível"
            )}
          </div>
          <br />

          <p style={{ textTransform: "uppercase" }}>{movieById.tagline}</p>
          <br />

          <p>{movieById.overview}</p>

          <br />
          <div style={{ display: "flex", gap: 10 }}>
            <DetailsMovie movie={movieById} />
            <ListCrew crew={crew} />
            <ListCast cast={cast} />
            <GenresMovies movie={movieById} />
          </div>

          <br />
          {(movieById.runtime && <p>{movieById.runtime} mins</p>) || !movieById}

          <br />

          {(movieById.vote_average && (
            <p>Nota: {movieById.vote_average.toFixed(2)}</p>
          )) ||
            !movieById.vote_average}

          <hr />
          <Recommended title={movieById.title} />

          <hr />
          <Similar title={movieById.title} />
        </div>
      )}
    </>
  );
};
