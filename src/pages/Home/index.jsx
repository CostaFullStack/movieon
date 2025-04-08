import { Action } from "./action";
import { Comedy } from "./comedy";
import { History } from "./history";
import { Horror } from "./horror";
import { SciFi } from "./sciFi";

export const Home = () => {
  return (
    <>
      <Horror />
      <Comedy />
      <SciFi />
      <Action />
      <History />
    </>
  );
};
