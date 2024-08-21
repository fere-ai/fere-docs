---
sidebar_position: 2
---

# Market Pulse Agent

The Market Pulse Agent has two interesting use cases. It can

- Generate summary about the market based on last `X` hours of social chatter and news.
- Answer questions from the social chatter and news based on last `X` hours.

`X` can be `1`, `2`, `4`, `12` or `24` hours.

## Generate Market Summary

### Endpoint

`/ws/generate_summary/{user_id}`

### Message

The Market Pulse Agent can generate summary based on the latest data from `1`, `2`, `4`, `12` and `24` hours.
You need to pass the hours as `x_hours` in the message.

```json
{
    "x_hours": 12,
    "stream": true,
    "agent": "MarketAnalyzerAgent"
}
```

### Intermediate Streaming Response

To understand more on the intermediate streaming response,
please refer to [this doc](../chat_response.md)

### Final Response


```json
{
    "chat_id": "d59cc640-64dd-4ce8-bc10-9e4719d5c671",
    "summary": "## Crypto Market Report: August 1st, 2024\n\nThis report synthesizes information from various cryptocurrency communities, providing insights for enthusiasts and traders.\n\n### Summary\n\nThe crypto market experienced a mixed day on August 1st, 2024, with Bitcoin and several major altcoins experiencing a dip following the Federal Reserve's decision to leave interest rates unchanged. However, the market showed signs of resilience, with some altcoins experiencing significant price increases and whale activity indicating potential bullish sentiment. \n\nThe day was marked by a surge in interest around DePINs (Decentralized Physical Infrastructure Networks), with discussions focusing on their potential to enhance crypto adoption.  The upcoming Ethereum birthday celebrations also sparked debate about the most appropriate date to commemorate the project's launch. \n\nRegulatory news included the introduction of a Bitcoin Strategic Reserve bill in the US Senate, which could have significant implications for the future of Bitcoin adoption. The G20's call for stricter regulations on stablecoins also highlighted the growing concerns around the stability of the financial ecosystem.\n\n### News and Developments\n\n#### Market Trends and Price Movements\n\n* **Bitcoin** dipped below $65,000, sending the market into a bearish mood. [Coindesk Article](https://www.coindesk.com/markets/2024/07/31/bitcoin-tumbles-below-65k-post-fomc-as-middle-east-tensions-flare/amp/)\n* **Ethereum** also experienced a dip, with a significant long liquidation on Binance.\n* **Solana** saw a notable decline, with its RSI indicating oversold conditions.\n* **Cardano** experienced a decline in transaction volume, raising concerns about its overvaluation. [Finbold Article](https://finbold.com/is-ada-overvalued-cardanos-network-volume-is-on-a-downtrend/)\n* **Pepe** saw a surge in price, with a whale depositing a significant amount of PEPE tokens to Binance. [Etherscan](https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933?a=0x9b10328f3628390f460b2cc25515fef17e87c0a4)\n* **DCR** experienced a significant price increase, with whale activity indicating potential bullish sentiment.\n* **ENA** showed signs of a potential bounce after a falling wedge pattern.\n* **THETA** showed signs of a potential reversal.\n* **BTC Dominance** increased slightly, indicating a shift towards Bitcoin.\n* **Total Market Capitalization** decreased by 3.47%.\n* **Total Value Locked** decreased by 4.13%.\n\n#### Project Updates and Partnerships\n\n* **Spindl** released part 2 of its Flywheel v1.0 Litepaper, outlining its vision for a permissionless, onchain advertising protocol. [Spindl Blog](https://blog.spindl.xyz/p/flywheel-v10-litepaper-part-2?r=aaog1&utm_medium=ios&triedRedirect=true)\n* **Gnosis DAO** introduced Gnosis AI, a division focused on agent-to-agent payments and prediction markets. [Gnosis Blog](https://www.gnosis.io/blog/meet-gnosis-ai)\n* **Weebs** announced its IDO, highlighting its web3 marketplace for Anime-Comic-Gaming digital goods. [Weebs Whitepaper](https://whitepaper.weebs.app)\n* **Mirada AI** announced its upcoming IDO on Ape Terminal. [Ape Terminal X Post](https://x.com/apeterminal/status/1818692954879660373)\n* **CoinList** launched the Enso Finance (ENSO) Community Auction. [CoinList Enso](https://coinlist.co/enso)\n* **MBA** introduced CeDeFi Mining, a feature that maximizes liquidity mining rewards by leveraging Binance's liquidity. [Bounce Finance X Post](https://x.com/bounce_finance/status/1818820669171278188)\n* **Mellow Protocol** announced its upcoming launch. [Mellow Protocol X Post](https://x.com/mellowprotocol/status/1798282883368657142)\n\n#### Regulatory News\n\n* **Sen. Cynthia Lummis** introduced the Bitcoin Strategic Reserve bill in the US Senate, proposing the establishment of a Bitcoin reserve fund for the US Treasury. [Cointelegraph Article](https://cointelegraph.com/news/sen-lummis-introduces-bitcoin-strategic-reserve-bill-senate)\n* **The G20** demanded firm rules on stablecoins, expressing concerns about their potential impact on financial stability. [Ethnews Article](https://www.ethnews.com/g20-pushes-for-strict-regulation-on-stablecoins-amid-financial-stability-concerns/)\n* **The SEC** charged the founder of Bitclout with selling unregistered securities.\n\n#### Institutional Activities\n\n* **Bitwise CIO Matt Hougan** expressed bullish sentiment on Bitcoin following pledges from US politicians. [Cointelegraph Article](https://cointelegraph.com/news/bitwise-investment-chief-crypto-market-still-isnt-bullish-enough)\n* **Sygnum Bank** predicted that Ethereum ETFs could reach $10 billion in assets under management within their first year. [Cointelegraph Article](https://cointelegraph.com/news/ethereum-etfs-could-reach-10b-aum-in-first-year-sygnum-bank?utm_source=rss_feed)\n* **Tether** released its Q2 2024 attestation, reporting a record-breaking $5.2 billion profit in the first half of 2024. [Tether News](https://tether.io/news/tether-q2-2024-attestation-reports-record-breaking-5-2-billion-profit-in-first-half-of-2024-highest-treasury-bill-ownership-ever-largest-ever-group-consolidated-equity-at-almost-12-billion/)\n* **MtGox** announced repayments in Bitcoin and Bitcoin Cash to over 17,000 rehabilitation creditors. [MtGox Announcement](https://www.mtgox.com/img/pdf/20240731_f6e19c0e-85b0-41f6-8102-2e8cafc9c498_announcement_en.pdf)\n\n### Degen Alpha\n\n* **$BALLER** (Token Contract Address: 3qpjkw8ssdptcz3g87pjtxpvfm763pjzpw49shyojzyg) - A new memecoin on Solana with a cult-like following. It has shown resilience after an 80% dump, bouncing back to previous levels. [DexScreener](https://dexscreener.com/solana/3qpjkw8ssdptcz3g87pjtxpvfm763pjzpw49shyojzyg)\n* **$KEN** - A Doge Meta memecoin that has seen significant price increases, reaching a market cap of $15 million.\n* **$DOKY** (Token Contract Address: 5Rs53fY3q4t4mLk9zBQ45cVNgF1RH7NqRNXiP6Pa5rYH) - A memecoin with a strong community and potential for growth. [Donkey King Website](https://donkeykingsol.xyz/)\n* **$WIN** (Token Contract Address: 91udrm6g48vwghgeb8fcbdamn8bfawjqn8swrsbbmpbq) - A memecoin with a strong community and a history of rebounding after dips. [DexScreener](https://dexscreener.com/solana/91udrm6g48vwghgeb8fcbdamn8bfawjqn8swrsbbmpbq)\n* **$CTO** - A new memecoin on Solana that saw a 94x gain in just one hour. [Solscan](https://solscan.io/account/5DhpHx9pLbxh9HZvQGH2GHgZ2FUeTuJKKfFBAFHiv4sy#transfers)\n* **$GRASS** - An ERC-20 token with a TGE airdrop.\n* **$SW** - The token for the Sunwaves electronic music festival, launching on IceOpenNetwork. \n\n**Risks:** All new tokens and memecoins carry significant risk, including rug pulls, scams, and volatility. Always conduct thorough due diligence before investing.\n\n### Patterns and Insights\n\n* **DePINs** are gaining traction as a potential driver of crypto adoption. The discussion around DePINs highlights the growing interest in bridging the gap between the digital and physical worlds.\n* **Memecoins** continue to be a popular investment strategy, with several new projects emerging and experiencing significant price fluctuations.\n* **Whale activity** is a key indicator of potential market movements. The large buy and sell orders observed on Binance suggest that whales are actively participating in the market.\n* **Regulatory uncertainty** remains a significant factor in the crypto market. The SEC's charges against Bitclout and the G20's call for stricter regulations on stablecoins highlight the ongoing challenges for the industry.\n* **The Ethereum birthday** debate highlights the importance of understanding the milestones and achievements of crypto projects.\n\n**Disclaimer:** This report is for informational purposes only and should not be considered investment advice. Always conduct your own research before making any investment decisions.\n",
    "agent_version": "v2",
    "agent_api_name": "MarketAnalyzerAgent",
    "query_summary": "Summary of the last 12 hours in crypto world",
    "is_summary": true,
    "agent_credits": 70,
    "credits_available": 4650
}

```



## Chat about Market


### Endpoint

URL: `/chat/v1/ws/{user_id}`

The MarketAnalyzer Agent can chat based on the latest data from `12`, `24` and `48` hours.
You need to pass the hours as `x_hours` in the message.

### Message

```json
{
    "message": "What has happened with $SOL?",
    "stream": true,
    "x_hours": 12,
    "agent": "MarketAnalyzerAgent"
}
```

### Intermediate Streaming Response

To understand more on the intermediate streaming response,
please refer to [this doc](../chat_response.md)

### Final Answer

```json
{
    "answer": "The sentiment surrounding $SOL is currently negative. There have been discussions about Solana's declining price performance and a growing sense of network indifference. \n\n* **Cardano's Sinking Ship: ADA's Transaction Volume Takes a Hit, Sparks Overvaluation Concerns** - This article discusses how Cardano has slipped a few notches on the market cap ladder, succumbing to rising competitors. This tumble can be traced back to its disappointing price performance, and a growing sense of network indifference. Since March, Cardano's daily dealings have been on a declining spree, revealing a pattern that points towards deteriorating fundamentals and diminishing economic value. \n    * [Read Article](https://finbold.com/is-ada-overvalued-cardanos-network-volume-is-on-a-downtrend/)\n\n* **RSI Oversold Alert (4h)** - Solana's RSI (Relative Strength Index) is currently oversold on the 4-hour chart, indicating a potential for a rebound. \n    * #SOL (RSI: 29.96) | 24h: -6.60%\n\n* **Solana looks in a free fall how pepe can fly?** - This comment reflects the sentiment that Solana is experiencing a significant downturn, while Pepe is seeing a surge in price.\n\nOverall, the data suggests that Solana is facing challenges, with concerns about its price performance and network activity. However, the oversold RSI on the 4-hour chart suggests a potential for a rebound. \n",
    "representation": [
        {
            "type": "symbols",
            "value": []
        },
        {
            "type": "nfts",
            "value": []
        },
        {
            "type": "tweets",
            "value": []
        },
        {
            "type": "casts",
            "value": []
        },
        {
            "type": "news",
            "value": []
        },
        {
            "type": "coins_data",
            "value": []
        }
    ],
    "chat_id": "9f2acc6d-0bca-44bc-8939-1d599914a696",
    "agent_version": "v2",
    "agent_api_name": "MarketAnalyzerAgent",
    "query_summary": "Summary of the last 12 hours in crypto world",
    "agent_credits": 70,
    "credits_available": 4820
}
```