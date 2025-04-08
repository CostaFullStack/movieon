import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TranslateProductionCountry } from "../../../utils/productionCountries";
import { TranslateSpokenLanguage } from "../../../utils/spokenLanguages";
import { TranslateOriginalLanguage } from "../../../utils/originalLanguage";

export const DetailsMovie = ({ movie }) => {
  const [searchDetails, setSearchDetails] = useState();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setSearchDetails(!searchDetails)}
        >
          Detalhes
        </p>
        {searchDetails && (
          <div>
            {movie.production_companies.length > 0 ? (
              <p>
                Estúdio:{" "}
                {movie.production_companies.map((company, element, array) => (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/filmes/estudio/${company.id}`)}
                  >
                    {company.name}
                    {element < array.length - 1 && ", "}
                  </span>
                ))}
              </p>
            ) : (
              !movie.production_companies
            )}

            {movie.production_countries.length > 0 ? (
              <p>
                País de produção:{" "}
                {movie.production_countries.map((country, element, array) => (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/filmes/pais/${country.iso_3166_1}`)
                    }
                  >
                    {TranslateProductionCountry({ country: country.name })}
                    {element < array.length - 1 && ", "}
                  </span>
                ))}
              </p>
            ) : (
              !movie.production_countries
            )}

            <p>
              Linguagem primária:{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(`/filmes/linguagem/${movie.original_language}`)
                }
              >
                {TranslateOriginalLanguage({
                  isoLanguage: movie.original_language,
                }) || !movie.original_language}
              </span>
            </p>

            {movie.spoken_languages.length > 0 ? (
              <p>
                Linguagem falada:{" "}
                {movie.spoken_languages.map((spoken, element, array) => (
                  <span
                    onClick={() =>
                      navigate(`/filmes/linguagem/${spoken.iso_639_1}`)
                    }
                  >
                    {TranslateSpokenLanguage({ language: spoken.english_name })}
                    {element < array.length - 1 && ", "}
                  </span>
                ))}
              </p>
            ) : (
              !movie.spoken_languages
            )}
          </div>
        )}
      </div>
    </>
  );
};
