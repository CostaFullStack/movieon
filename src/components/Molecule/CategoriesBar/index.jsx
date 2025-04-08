import { useNavigate } from "react-router-dom";
import { LinksApi } from "../../../utils/linksApi";
import { useEffect, useState } from "react";
import axios from "axios";

const key = LinksApi.key;
const language = LinksApi.traduzido;

export const CategoriesBar = ({ cat }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();

  async function getCategories() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?${key}${language}`
    );
    setCategories(data.genres);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function navigateToCategory(e) {
    e.preventDefault()
    const title = e.target.textContent;
    const id = e.target.id;
    navigate(`/${cat}/?q=${id}&t=${title}`);
  }

  return (
    <>
      <nav>
        <ul>
          {categories &&
            categories.map((category) => (
              <li id={category.id} onClick={navigateToCategory}>
                {category.name}
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};
