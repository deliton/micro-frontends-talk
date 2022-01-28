<script>
  let blocks = [
    {
      title: "#1 - Solana",
      thumbnail:
        "https://styles.redditmedia.com/t5_hcs2n/styles/communityIcon_j73u48561y681.png?width=256&s=8cf3c2f3f84af2cc0762c46575d58a8c99f7c43e",
      text: `In terms of 'altcoins', Solana which recently fell 12%, presents itself as the best option for investment as it seeks to establish a new smart contract network to compete with Ethereum. Launched in 2020 it is still relatively new, however it is already starting to acquire an increasing share of the market.`,
    },
    {
      title: "#2 - Polkadot",
      thumbnail: "https://miro.medium.com/max/512/0*paOBLv05b7f4q5Fi.png",
      text: `Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3. Polkadot is known as a layer-0 metaprotocol because it underlies and describes a format for a network of layer 1 blockchains known as parachains (parallel chains). As a metaprotocol, Polkadot is also capable of autonomously and forklessly updating its own codebase via on-chain governance according to the will of its token holder community.`,
    },
    {
      title: "#3 - Binance Coin",
      thumbnail:
        "https://assets.trustwalletapp.com/blockchains/smartchain/info/logo.png",
      text: `Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance.`,
    },
    {
      title: "#4 - Ethereum",
      thumbnail:
        "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png",
      text: `Ethereum saw a 300% increase in size this year. On January 1st, Ethereum was priced at just over $760 and as of now, ETH has been hovering near $4000. The current Market cap of ETH is around $441 billion and the approximate return on investment on ETH is massive 134041.07%. Ethereum’s ATH was on Nov 16, 2021, and it was $4891.70.`,
    },
    {
      title: "#5 - Polygon",
      thumbnail:
        "https://styles.redditmedia.com/t5_2qgijx/styles/communityIcon_0m58s8ku9v371.png?width=256&s=0c80901e7f77eaa0f29c4367c91b282231b3e33e",
      text: `Polygon has been the best performing cryptocurrency in 2021. It started the year valued at less than 2 cents and by May Matic was trading over $2. This year Polygon has gained 11,026% in price while the market cap of Polygon is around $14 Billion as of now. Polygon’s all time high was $2.96 on December 27, 2021.`,
    },
    {
      title: "#6 - Terra (LUNA)",
      thumbnail: "https://coinarbitragebot.com/inc/coin_logos/terra.png",
      text: `LUNA has gained a massive 9,530% this year. LUNA was priced around $0.64 on January 1st, 2021 and currently, Terra (LUNA) is trading around $86. On December 23rd, 2021 LUNA attained its ATH of $103.33 but since then LUNA is down by around 17%. Market Cap of Terra (LUNA) is just over $31 B.`,
    },
    {
      title: "#7 - Cardano",
      thumbnail:
        "https://b.thumbs.redditmedia.com/IgijRk3lzYmqAJDwras0Uij12_KMCQUDQGwGihsNqTY.png",
      text: `Cardano was founded back in 2017, and named after the 16th century Italian polymath Gerolamo Cardano. The native ADA token takes its name from the 19th century mathematician Ada Lovelace, widely regarded as the world’s first computer programmer. The ADA token is designed to ensure that owners can participate in the operation of the network. Because of this, those who hold the cryptocurrency have the right to vote on any proposed changes to the software.`,
    },
    {
      title: "#8 - Dash",
      thumbnail: "https://chainz.cryptoid.info/logo/dash.png",
      text: `Dash is an open-source blockchain and cryptocurrency focused on offering a fast, cheap global payments network that is decentralized in nature. According to the project's white paper, Dash seeks to improve upon Bitcoin (BTC) by providing stronger privacy and faster transactions.`,
    },
  ];
</script>

<div class="p-6 bg-gray-100 flex flex-col items-center object-fill h-full">
  {#each blocks as element, index}
    <div key={`post-container-${index}`} class="flex flex-col items-center">
      <h1
        key={`post-title-${index}`}
        class="text-3xl font-sans font-bold text-blue-600 mb-8"
      >
        {element.title}
      </h1>
      <img
        key={`post-img-${index}`}
        src={element.thumbnail}
        class="mb-8"
        alt={`homepage-post-img-${index}`}
      />
      <p
        key={`post-text-${index}`}
        class="w-6/12 font-sans font-medium text-2xl mb-8 text-justify"
      >
        {element.text}
      </p>
    </div>
  {/each}
</div>
