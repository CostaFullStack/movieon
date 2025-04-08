import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState("");

  const search = (e) => {
    e.preventDefault();
    setSearchMovie("")
    navigate(`/pesquisar?q=${searchMovie}`);
  };

  return (
    <>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="digite o nome do filme"
          value={searchMovie}
          onChange={({target}) => setSearchMovie(target.value)}
        />
        <button type="submit">Pesquisar filme</button>
      </form>
    </>
  );
};
