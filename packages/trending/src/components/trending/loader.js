import Trending from "./Trending.svelte";

import "../../index.scss";

export default (el) => {
  const app = new Trending({
    target: el,
  });
  el = app;
};
