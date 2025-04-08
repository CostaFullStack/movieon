import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Organism/Layout";
import { GlobalStyle } from "./utils/globalStyle";
import { Home } from "./pages/Home";
import { SearchMovies } from "./pages/SearchMovies";
import { Movies } from "./pages/Movies";
import { Movie } from "./pages/Movie";
import { ProductionCountries } from "./pages/ProductionCountries";
import { SpokenLanguages } from "./pages/SpokenLanguages";
import { ProductionCompanies } from "./pages/ProductionCompanies";
import { Year } from "./pages/Year";
import { Genres } from "./pages/Genres";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pesquisar" element={<SearchMovies />} />
          <Route path="filmes" element={<Movies />} />
          <Route path="categoria" element={<Movies />} />
          <Route path="filme/:id" element={<Movie />} />
          <Route
            path="filmes/pais/:countryCode"
            element={<ProductionCountries />}
          />
          <Route
            path="filmes/linguagem/:languageCode"
            element={<SpokenLanguages />}
          />
          <Route
            path="filmes/estudio/:companyCode"
            element={<ProductionCompanies />}
          />
          <Route path="filmes/ano/:year" element={<Year />} />
          <Route path="filmes/genero/:id" element={<Genres />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
