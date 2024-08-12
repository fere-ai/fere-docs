---
sidebar_position: 1
---

# ⌨ Introduction

# The most reliable & comprehensive web3 AI API.

Started in 2024, FereAI is leading in AI x Web3 space.
Our AI Agents have the most up to date data across CEX, DEX, Social Platforms, NFTs, DeFi, News and more.

FereAI offers the most advanced AI Agents for your daily crypro research and alpha discovery
through our RESTful and Websocket JSON endpoints.



Here are some of the common use cases for clients who use FereAI's Agentic APIs:

1. Perform token analysis. Compare tokens, get metrics and make a decision.
2. Analyze the social chatter around a token.
3. Perform search on Farcaster and Twitter for a token, topic of theme.
4. Get latest DeFi data and make decisions on it.
5. Summary and Q&A over latest market data and chatter. What has happened in last 12 hours and more.


## Agents

We have the following agents:

|Agent Name | Description | Agent_API_Name| Credits per call|
|---|---|---|---|
|Pro Agent| A Ninja Agent for Crypto Markets Research and Actions | `ProAgent` | 30|
|TA Researcher | AI agent to streamline your crypto technical analysis and boost your trading decisions. | `TokensAgent` | 10 |
|Dr. Defi| A DeFi agent that navigates blockchain networks to provide precise metrics. | `DefiAgent` | 10|
|Mr. Caster | A Farcaster agent that retrieves useful casts as per your needs. | `FarcasterAgent` | 10|
|Agent Tweeter| Provides information on tweets | `TwitterAgent` | 15 |
|Market Agent| AI agent to streamline your crypto technical analysis and boost your trading decisions. | `MarketAnalyzerAgent` | 70|
|No Noise News|An AI agent that fetches tailor-made news articles & info just for you.|`NewsAgent`| 10|

## API Requests

The request to each agents is done over websockets. This is because

1. The time taken to respond completely can be huge which might have issues at various levels.
2. We want to provide a true token-by-token streaming experience, where every token
streamed from the Agents is shown on UI.

