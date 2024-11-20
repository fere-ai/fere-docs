---
sidebar_position: 1
---

# ⌨ Introduction

# The most reliable & comprehensive web3 AI API.

Started in 2024, FereAI is leading in Autonomous AI x Web3 space.
Our AI Agents have the most up to date data across CEX, DEX, Social Platforms, NFTs, DeFi, News and more.

FereAI offers the most advanced Autonomous AI Agents for your daily crypro research, alpha discovery and trade
through our RESTful and Websocket JSON endpoints.

Our Agents are broadly in two categories:

1. Research and Dicovery
2. Trade Agents


## Research and Discovery

Here are some of the common use cases for clients who use FereAI's Agentic APIs:

1. Perform token analysis. Compare tokens, get metrics and make a decision.
2. Analyze the social chatter around a token.
3. Perform search on Farcaster and Twitter for a token, topic of theme.
4. Get latest DeFi data and make decisions on it.
5. Summary and Q&A over latest market data and chatter. What has happened in last 12 hours and more.


### Agents

We have the following agents:

|Agent Name | Description | Agent_API_Name| Credits per call|
|---|---|---|---|
|Pro Agent| A Ninja Agent for Crypto Markets Research and Actions | `ProAgent` | 15|
|Market Agent| AI agent to streamline your crypto technical analysis and boost your trading decisions. | `MarketAnalyzerAgent` | 70|
|Casso Agent|An agent to draw super fast images| `CassoAgent`| 1|

### API Requests

The request to each agents is done over websockets. This is because

1. The time taken to respond completely can be huge which might have issues at various levels.
2. We want to provide a true token-by-token streaming experience, where every token
streamed from the Agents is shown on UI.

## Trade Agents

After building a strong foundation in Research and Discovery, we are now moving towards Trade Agents.
These agents will help you make trades on various platforms.

Our trade agent's root is called `0xMONK`. It's our first Sentient Autonomous Agent
that can trade in tokens.

To know more about `0xMONK``, please visit [here](/docs/api/Monk/fere-api).