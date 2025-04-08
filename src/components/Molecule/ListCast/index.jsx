import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListCast = ({ cast }) => {
  const navigate = useNavigate();
  const [searchCast, setSearchCast] = useState();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setSearchCast(!searchCast)}
        >
          Elenco
        </p>
        {searchCast && (
          <ul>
            {cast &&
              cast.map(
                (person) =>
                  person.name && (
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/elenco/${person.id}`)}
                      >
                        {person.name}
                      </span>{" "}
                      {person.character && <span>como {person.character}</span>}
                    </li>
                  )
              )}
          </ul>
        )}
      </div>
    </>
  );
};
