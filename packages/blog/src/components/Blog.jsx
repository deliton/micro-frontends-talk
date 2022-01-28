import React from "react";

import "../index.scss";

const blogPosts = [
  {
    title: "Rare Bored Ape Yacht Club NFT Sells for Record $3.4 Million USD",
    thumbnail:
      "https://user-images.githubusercontent.com/47995046/150659329-c5f43e63-3d4b-4532-bd31-e14d3adde05d.jpg",
    text: `Bored Ape Yacht Club #8817, one of 10,000 unique cartoon apes on the Ethereum blockchain, sold at Sotheby’s Natively Digital 1.2: The Collectors auction on Tuesday. The sale, the first on Sotheby’s newly-launched Metaverse digital art platform, was touted as “an NFT with historical significance” due to the collectible’s rarity. It’s not often that you see a Bored Ape with gold fur come up for sale, and this is the first time Bored Ape Yacht Club #8817 has been made available since it was minted,” Sotheby’s explained. “Less than 1% of all Bored Apes have the gold fur trait, making it an NFT with historical significance.`,
  },
  {
    title: "Bitcoin crashes again!",
    thumbnail:
      "https://user-images.githubusercontent.com/47995046/150659441-2841c7f1-17cb-46c3-8e04-b06e295ea320.jpg",
    text: `The plunge resulted in an overall market capitalization loss of more than $205 billion for the total cryptocurrency market in just 24 hours, according to CoinMarketCap. As of just before 10:00 a.m. ET, Bitcoin was down more than 10%, falling to $38,440. Year to date, the leading digital currency is down 16.6%—erasing more than 75% of Bitcoin’s 2021 gains.`,
  },
  {
    title: "Will Cardano recover its Market Cap in 2022?",
    thumbnail:
      "https://user-images.githubusercontent.com/47995046/150659484-80ab3f68-5b1f-445a-ae84-e42417b855eb.jpg",
    text: `Another busy week for Cardano, the open source blockchain, and its coin ADA which has seen a 25% price upswing followed by an 8% downturn to sit at $1.24 today (14 January).  The coin has been on a steady and rather steep decline since just peaking at over $3 last September and is now almost 60% down. In contrast, in the first nine months of 2021 it grew 1,400%. With a market capitalisation of $41.49bn ADA is the world’s seventh-largest cryptocurrency (slipping back one place to be behind Solano (SOL)) according to data from CoinMarketCap.`,
  },
];

export default function Blog() {
  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center object-fill h-full">
      {blogPosts.map((element, index) => (
        <div
          key={`post-container-${index}`}
          className="flex flex-col items-center"
        >
          <h1
            key={`post-title-${index}`}
            className="text-3xl font-sans font-bold text-blue-600 mb-8"
          >
            {element.title}
          </h1>
          <img
            key={`post-img-${index}`}
            src={element.thumbnail}
            className="mb-8"
          />
          <p
            key={`post-text-${index}`}
            className="w-6/12 font-sans font-medium text-2xl mb-8 text-justify"
          >
            {element.text}
          </p>
        </div>
      ))}
    </div>
  );
}
