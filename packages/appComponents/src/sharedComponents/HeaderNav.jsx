import React from "react";
import "../index.scss";

export default function HeaderNav() {
  return (
    <div className="bg-gray-800 p-6 flex justify-between">
      <a href="/" className="inline-flex">
        <img
          src="https://user-images.githubusercontent.com/47995046/150621945-e76f7b55-7a83-4a97-9920-f1580888a211.svg"
          className="h-8 mr-2"
          alt="CryptoTrends Logo"
        />
        <div className="font-sans text-2xl font-bold text-white">
          CryptoTrends
        </div>
      </a>
      <div className="inline-flex">
        <a
          href="/blog"
          className="px-10 py-2 mr-4 bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600 cursor-pointer"
        >
          Blog
        </a>
        <a
          href="/trends"
          className="px-10 py-2 bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600 cursor-pointer"
        >
          Trends
        </a>
      </div>
    </div>
  );
}
