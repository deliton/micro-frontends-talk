import React, { useEffect, useRef } from "react";
import mountTrendingPage from "trending/Trending";

export default () => {
  const svelteRef = useRef(null);

  useEffect(() => {
    mountTrendingPage(svelteRef.current);
  }, []);

  return <div ref={svelteRef} />;
};
