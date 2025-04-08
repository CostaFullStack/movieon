import { ContainerMovies } from "../../../utils/globalStyle";

export const Container = ({ children }) => {
  return (
    <>
      <ContainerMovies>{children}</ContainerMovies>
    </>
  );
};
