import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KnownForDepartment } from "../../../utils/knownForDepartment";

export const ListCrew = ({ crew }) => {
  const navigate = useNavigate();
  const [searchCrew, setSearchCrew] = useState();

  const uniqueCrew = [
    ...new Map(crew && crew.map((person) => [person.id, person])).values(),
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setSearchCrew(!searchCrew)}
        >
          Equipe
        </p>
        {searchCrew && (
          <ul>
            {uniqueCrew &&
              uniqueCrew.map((department) => (
                <li>
                  {department.known_for_department && (
                    <span>
                      <KnownForDepartment
                        department={department.known_for_department}
                      />
                    </span>
                  )}
                  {": "}
                  {department.name && (
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/equipe/${department.id}`)}
                    >
                      {department.name}
                    </span>
                  )}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};
