import { Categories } from "../Categories";
import { ComingSoon } from "./comingSoon";
import { NowPlaying } from "./nowPlaying";
import { Popular } from "./popular";
import { TopRated } from "./topRated";

export const Movies = () => {
  return (
    <>
      <Categories />
      <ComingSoon />
      <NowPlaying />
      <Popular />
      <TopRated />
    </>
  );
};
