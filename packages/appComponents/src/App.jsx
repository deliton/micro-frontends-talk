import React from "react";
import ReactDOM from "react-dom";
import HeaderNav from "./sharedComponents/HeaderNav";

import "./index.scss";

const App = () => (
  <div className="">
    <HeaderNav />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
