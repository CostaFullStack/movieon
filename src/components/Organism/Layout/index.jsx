import { Link, Outlet } from "react-router-dom";
import { SearchInput } from "../../Molecule/SearchInput";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/filmes"}>Filmes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <SearchInput/>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>movieon</p>
        <p> © Todos os direitos reservados</p>
      </footer>
    </>
  );
};
