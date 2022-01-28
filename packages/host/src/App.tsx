import React, { useEffect, useRef, lazy, Suspense } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import HeaderNav from "appComponents/HeaderNav";
import Footer from "appComponents/Footer";

import "./index.scss";

const VueHomepageLazy = lazy(() => import("./microfrontends/VueHomepage"));
const ReactBlogpageLazy = lazy(() => import("blog/Blog"));
const SvelteTrendingpageLazy = lazy(
  () => import("./microfrontends/SvelteTrendingpage")
);

const LoadingScreen = () => (
  <div className="flex flex-col justify-center items-center bg-gray-700 h-screen">
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-64 h-64 border-8 rounded-full"
        role="status"
      >
        <span className="visually-hidden" />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<VueHomepageLazy />}></Route>
          <Route path="/blog" element={<ReactBlogpageLazy />}></Route>
          <Route path="/trends" element={<SvelteTrendingpageLazy />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
