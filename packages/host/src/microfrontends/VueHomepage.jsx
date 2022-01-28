import React, { useEffect, useRef } from "react";
import mountHomePage from "homePage/Home";

export default () => {
  const vueRef = useRef(null);

  useEffect(() => {
    mountHomePage(vueRef.current);
  }, []);

  return <div ref={vueRef} />;
};
