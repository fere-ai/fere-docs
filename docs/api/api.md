---
sidebar_position: 1
---

# ⌨ Introduction

We've happy to share APIs with you. Our APIs are agentic APIs. This means that
you can use them to converse with any of our AI Agents.



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

