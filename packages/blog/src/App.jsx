import React from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";

import "./index.scss";

const App = () => (
  <div>
   <Blog />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
