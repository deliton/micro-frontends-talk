import React from "react";
import "../index.scss";

export default function Footer() {
  return (
    <footer classNameName="text-center bg-gray-900 text-white p-8">
      <div
        className="text-white font-bold text-center p-6 bg-gray-800"
      >
        © 2022 Copyright:
        <a className="text-white font-bold" href="https://tailwind-elements.com/">
           Crypto Trends
        </a>
      </div>
    </footer>
  );
}
