---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fere Pro

The `Fere Pro` is an all in one agent. It can perform following actions:

1. Search coins, their historical and current market data including price, market cap, volume change, price change, sentiment change etc.
2. Search for a coins social media chatter on Twitter and Farcaster.
3. Find the latest news on a coin.
4. Perform a search on casts by a farcaster user.
5. Perform a search for tweets by a farcaster user.
6. Perform search and analysis on casts in a farcaster channel.
7. Identify KOLs for a coin.


:::tip

Use @ syntax to search for a username. Example @dwr.eth or @elonmusk

It will automatically search for user on twitter or farcaster. If you want to
specify a social network, just ask that in your query.

:::

:::tip

Use / syntax to search for casts in a farcaster channel.

Ex: "What's the latest in /farcaster"

:::

## Endpoint

This agent can only be accessed on websocket.
Endpoint: `/chat/v2/ws/{user_id}?X-FRIDAY-KEY=YOUR_API_KEY`

## Message

```json
{
    "message": "What are the trending coins? Compare their growth against $BTC in last 3 months",
    "stream": true,
    "agent": "ProAgent"
}
```

<Tabs>
  <TabItem value="python" label="Python" default>

```python

import asyncio
import websockets
import json

async def websocket_client():
    user = "1a5b4a29-9d95-44c8-aef3-05a8e515f43e"
    uri = f"wss://api.fereai.xyz/chat/v2/ws/{user}"

    async with websockets.connect(uri) as websocket:
        # Message to send
        message = {
            "message": "What are the trending coins? Compare their growth against $BTC in last 3 months",
            "stream": True,
            "agent": "ProAgent"
        }

        # Send the message
        await websocket.send(json.dumps(message))
        print("Message sent")

        # Continuously receive and print messages
        while True:
            try:
                response = await websocket.recv()
                print("Received:", response)
            except websockets.exceptions.ConnectionClosed:
                print("Connection closed")
                break

# Run the async function
asyncio.get_event_loop().run_until_complete(websocket_client())
```

</TabItem>

<TabItem value="js" label="Javascript">

```javascript
const WebSocket = require('ws');

const user = "1a5b4a29-9d95-44c8-aef3-05a8e515f43e"
const url = 'wss:/api.fereai.xyz/chat/v2/ws/' + user;

const ws = new WebSocket(url);

ws.on('open', function open() {
    console.log('Connected to WebSocket server');

    const message = {
        message: "What are the trending coins? Compare their growth against $BTC in last 3 months",
        stream: true,
        agent: "ProAgent"
    };

    ws.send(JSON.stringify(message));
    console.log('Message sent');
});

ws.on('message', function incoming(data) {
    console.log('Received:', data.toString());
});

ws.on('close', function close() {
    console.log('Disconnected from WebSocket server');
});

ws.on('error', function error(err) {
    console.error('WebSocket error:', err);
});
```
</TabItem>
</Tabs>

## Intermediate Streaming Response

To understand more on the intermediate streaming response,
please refer to [this doc](../chat_response.md)

## Final Response


```json
{
    "answer": "Here\u2019s a detailed comparison of the trending coins against Bitcoin ($BTC) over the last three months, focusing on their price changes and market performance.\n\n| **Coin**         | **Current Price (USD)** | **Market Cap (USD)** | **Price Change (Last 90 Days)** | **Market Cap Change (Last 90 Days)** | **Sentiment** | **Price Change % (Last 90 Days)** |\n|-------------------|-------------------------|-----------------------|----------------------------------|---------------------------------------|---------------|------------------------------------|\n| **Bitcoin (BTC)** | $64,728                 | $1.28 Trillion        | +$4,138.45                       | +$85.06 Billion                       | 79            | +6.82%                             |\n| **Toncoin (TON)** | $6.86                   | $17.26 Billion        | N/A                              | N/A                                   | 71.83         | N/A                                |\n| **Kujira (KUJI)** | $0.57                   | $69.60 Million        | N/A                              | N/A                                   | 43.59         | N/A                                |\n| **VGX Token (VGX)** | $0.07                 | $25.76 Million        | N/A                              | N/A                                   | 96.88         | N/A                                |\n| **Aleph Zero (AZERO)** | $0.50              | $162.84 Million       | N/A                              | N/A                                   | 87.88         | N/A                                |\n| **Waffles (WAFFLES)** | $0.02               | $20.94 Million        | N/A                              | N/A                                   | 78.57         | N/A                                |\n| **Layer3 (L3)**   | $0.08                   | $30.31 Million        | N/A                              | N/A                                   | 71.25         | N/A                                |\n| **Neiro on ETH (NEIRO)** | $0.18           | $173.16 Million       | N/A                              | N/A                                   | 63.79         | N/A                                |\n| **Solana (SOL)**  | $170.50                 | $79.33 Billion        | N/A                              | N/A                                   | 70.18         | N/A                                |\n| **Aave (AAVE)**   | $114.93                 | $1.71 Billion         | N/A                              | N/A                                   | 84.62         | N/A                                |\n| **Kaspa (KAS)**   | $0.21                   | $5.01 Billion         | N/A                              | N/A                                   | 85.61         | N/A                                |\n\n### Insights:\n- **Bitcoin ($BTC)** has shown a solid growth of **6.82%** over the last three months, with a significant increase in market cap by **$85.06 billion**.\n- **Toncoin (TON)** is currently the highest trending coin with a market cap of **$17.26 billion**, but its historical price data is not available for comparison.\n- **Kujira (KUJI)** and **VGX Token (VGX)** have experienced significant price drops recently, indicating volatility in their markets.\n- **Solana (SOL)** and **Aave (AAVE)** are notable for their substantial market caps, suggesting strong investor interest despite recent price fluctuations.\n\nThis analysis highlights the varying performance of trending coins compared to Bitcoin, which remains a stable investment option in the current market landscape.",
    "representation": [
        {
            "type": "symbols",
            "value": [
                "AVAILUSDT",
                "NEIROETHUSDT",
                "KUJIUSDT",
                "TONUSDT",
                "L3USDT",
                "VGXUSDT",
                "ETHUSDT",
                "WAFFLESUSDT",
                "KASUSDT",
                "ATHUSDT",
                "JUPUSDT",
                "AZEROUSDT",
                "WIFUSDT",
                "AAVEUSDT",
                "SOLUSDT"
            ]
        },
        {
            "type": "nfts",
            "value": []
        },
        {
            "type": "tweets",
            "value": [
                {
                    "content": "Exciting news for @tonblockchain enthusiasts has just launched a limited-time Earn Plan offering an industry-leading 10 APR on your TON for 30 and 60 day Plans Dont miss out Offer capped at 550,000 TON Learn more on the TON Telegram Channel",
                    "url": "https://twitter.com/M2Exchange/status/1816070310656950665"
                },
                {
                    "content": "DOGS Principles Do you like to wait Neither do we Here are the key things about the upcoming DOGS listing No locks or vesting Community owns most tokens No investors No new supply Ever Telegram-native utility TON Blockchain Stay hungry, stay tuned",
                    "url": "https://twitter.com/realDogsHouse/status/1815873343603769839"
                }
            ]
        },
        {
            "type": "casts",
            "value": [
                {
                    "content": "Santiment Comments on social media have been positive this week regarding  In fact, this is the highest level of bullish commentary from the crypto crowd since May 15th The level of optimism among the crowd indicates that many believe that a rise in the price of BTC to 70,000 is imminent",
                    "url": "https://www.warpcast.com/play-casino.eth/0x06b80692"
                },
                {
                    "content": "Were excited to announce the launch of Universal Mainnet Beta, first on  Universal enables exposure to assets previously not available on think SOL, DOGE, and BTC, with CEX-like performance and price execution Read on to get access today",
                    "url": "https://www.warpcast.com/gaut/0xa205ac6d"
                }
            ]
        },
        {
            "type": "news",
            "value": [
                {
                    "title": "'Elon Musk at Bitcoin 2024' scam, Lazarus Group hacks ...",
                    "url": "https://cointelegraph.com/magazine/fake-bitcoin-2024-ai-stream-mog-phishing-dmm-hack-dust-exsi-ransomware/?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_partner_inbound",
                    "text": "Investors lost 79K to deepfake Elon Musk at Bitcoin 2024, MOG holder phished bad, ransomware backdoor in ESXi server software Crypto scams, hacks and exploits and how to avoid them Crypto-Sec Deepfake scams Bitcoin conference AI drains 79K As the Bitcoin 2024 conference was taking place on July 25-27, crypto users lost over 79,000 due to a deep-fake AI livestream of the conference The fake livestream featured footage of Elon Musk giving a speech, but while Musk had been rumored to attend, he did not actually speak at the conference and obviously had no involvement with the video like countless other Musk related scams online Michael Dunworth, co-founder of crypto payments service Wyre, reported the deep-fake scam through a post to X on July 26 Ive had people call me telling me Elon Musk is giving free Bitcoins away at Bitcoin 24, he stated No wonder, they have a fake live stream with dubbed voice over, and 70k fake people watching the live stream According to Dunworths post,"
                },
                {
                    "title": "\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u306e\u6700\u65b0\u30cb\u30e5\u30fc\u30b9\u3092\u30c1\u30a7\u30c3\u30af",
                    "url": "https://jp.cointelegraph.com/tags/bitcoin",
                    "text": "Switch to the English version No Yes   ETH Web30 GameFi AIChatGPT  NFT DEFI  AI MT4 DMM Bitcoin BTC BTC XRP DeFi PR Bitcoin, BTCP2PDLT2017GPUASIC2"
                }
            ]
        },
        {
            "type": "coins_data",
            "value": {
                "currencies": [
                    {
                        "id": "the-open-network",
                        "symbol": "ton",
                        "name": "Toncoin",
                        "current_price": 6.86,
                        "market_cap": 17258872294,
                        "fully_diluted_valuation": 35038086349,
                        "price_change_percentage_24h": 1.02257,
                        "circulating_supply": 2516978981.27478,
                        "total_supply": 5109842948.08345,
                        "circulating_supply_percentage": 49.257462643129244,
                        "price_change_percentage_7d": 3.75113,
                        "current_sentiment_positive": 71.83,
                        "trade_pair": "TONUSDT",
                        "description": "TON (The Open Network) is a general-purpose\u00a0blockchain that allows developers to build decentralized apps and tokens.",
                        "links": {
                            "homepage": [
                                "https://ton.org/",
                                "https://blog.ton.org/",
                                "https://jobs.ton.org/jobs"
                            ],
                            "whitepaper": "https://ton.org/whitepaper.pdf",
                            "blockchain_site": [
                                "https://tonscan.org",
                                "https://tonmoon.org/explorer/",
                                "https://youton.org/",
                                "https://3xpl.com/ton",
                                "https://tonapi.io/",
                                "https://etherscan.io/token/0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
                                "https://ethplorer.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
                                "https://bscscan.com/token/0x76a797a59ba2c17726896976b7b3747bfd1d220f",
                                "https://binplorer.com/address/0x76a797a59ba2c17726896976b7b3747bfd1d220f",
                                "https://tonscan.org/address/EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c"
                            ],
                            "official_forum_url": [
                                "https://www.linkedin.com/company/ton-blockchain/"
                            ],
                            "twitter_screen_name": "ton_blockchain",
                            "telegram_channel_identifier": "toncoin",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/ton-blockchain/ton",
                                    "https://github.com/ton-blockchain"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "TON",
                                "target": "USDT",
                                "market": {
                                    "name": "Bybit",
                                    "identifier": "bybit_spot",
                                    "has_trading_incentive": false
                                },
                                "last": 6.8689,
                                "volume": 4533937.69,
                                "converted_last": {
                                    "btc": 0.00010602,
                                    "eth": 0.00214657,
                                    "usd": 6.86
                                },
                                "converted_volume": {
                                    "btc": 475.132,
                                    "eth": 9620,
                                    "usd": 30763497
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.015825,
                                "timestamp": "2024-08-01T12:28:15+00:00",
                                "last_traded_at": "2024-08-01T12:28:15+00:00",
                                "last_fetch_at": "2024-08-01T12:28:15+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bybit.com/trade/spot/TON/USDT",
                                "coin_id": "the-open-network",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "BNB Chain Ecosystem",
                            "Layer 1 (L1)",
                            "Ethereum Ecosystem",
                            "Animoca Brands Portfolio",
                            "Alleged SEC Securities",
                            "DWF Labs Portfolio",
                            "TON Ecosystem",
                            "Proof of Stake (PoS)",
                            "Pantera Capital Portfolio",
                            "GMCI Layer 1 Index",
                            "GMCI 30 Index"
                        ]
                    },
                    {
                        "id": "kujira",
                        "symbol": "kuji",
                        "name": "Kujira",
                        "current_price": 0.568754,
                        "market_cap": 69599483,
                        "fully_diluted_valuation": 69614766,
                        "price_change_percentage_24h": -41.24169,
                        "circulating_supply": 122347615.687296,
                        "total_supply": 122374481.990696,
                        "max_supply": 122398170.0,
                        "circulating_supply_percentage": 99.97804582870305,
                        "price_change_percentage_7d": -43.47517,
                        "current_sentiment_positive": 43.59,
                        "trade_pair": "KUJIUSDT",
                        "chain": "osmosis",
                        "contract": "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
                        "description": "Kujira is committed to levelling the playing field in decentralized finance by building dApps for regular crypto users.",
                        "links": {
                            "homepage": [
                                "https://kujira.app/"
                            ],
                            "blockchain_site": [
                                "https://finder.kujira.app/",
                                "https://kujira.explorers.guru/",
                                "https://etherscan.io/token/0x96543ef8d2C75C26387c1a319ae69c0BEE6f3fe7",
                                "https://ethplorer.io/address/0x96543ef8d2c75c26387c1a319ae69c0bee6f3fe7",
                                "https://arbiscan.io/token/0x3A18dcC9745eDcD1Ef33ecB93b0b6eBA5671e7Ca",
                                "https://optimistic.etherscan.io/token/0x3A18dcC9745eDcD1Ef33ecB93b0b6eBA5671e7Ca",
                                "https://www.mintscan.io/secret/address/secret13hvh0rn0rcf5zr486yxlrucvwpzwqu2dsz6zu8",
                                "https://bscscan.com/token/0x073690e6CE25bE816E68F32dCA3e11067c9FB5Cc",
                                "https://binplorer.com/address/0x073690e6ce25be816e68f32dca3e11067c9fb5cc"
                            ],
                            "announcement_url": [
                                "https://medium.com/team-kujira"
                            ],
                            "twitter_screen_name": "TeamKujira",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/Team-Kujira/"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "KUJI",
                                "target": "USD",
                                "market": {
                                    "name": "Kraken",
                                    "identifier": "kraken",
                                    "has_trading_incentive": false
                                },
                                "last": 0.481,
                                "volume": 391801.98164,
                                "converted_last": {
                                    "btc": 7.43e-06,
                                    "eth": 0.00015041,
                                    "usd": 0.481
                                },
                                "converted_volume": {
                                    "btc": 2.910654,
                                    "eth": 58.929,
                                    "usd": 188457
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 3.188228,
                                "timestamp": "2024-08-01T12:26:47+00:00",
                                "last_traded_at": "2024-08-01T12:26:47+00:00",
                                "last_fetch_at": "2024-08-01T12:28:22+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://pro.kraken.com/app/trade/KUJI-USD",
                                "coin_id": "kujira"
                            },
                            {
                                "base": "KUJI",
                                "target": "EUR",
                                "market": {
                                    "name": "Kraken",
                                    "identifier": "kraken",
                                    "has_trading_incentive": false
                                },
                                "last": 0.4473,
                                "volume": 57504.30221,
                                "converted_last": {
                                    "btc": 7.46e-06,
                                    "eth": 0.00015098,
                                    "usd": 0.482852
                                },
                                "converted_volume": {
                                    "btc": 0.42883793,
                                    "eth": 8.682265,
                                    "usd": 27766
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 1.218432,
                                "timestamp": "2024-08-01T12:26:47+00:00",
                                "last_traded_at": "2024-08-01T12:26:47+00:00",
                                "last_fetch_at": "2024-08-01T12:28:22+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://pro.kraken.com/app/trade/KUJI-EUR",
                                "coin_id": "kujira"
                            },
                            {
                                "base": "KUJI",
                                "target": "USDT",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.4837,
                                "volume": 1949050.92,
                                "converted_last": {
                                    "btc": 7.47e-06,
                                    "eth": 0.00015116,
                                    "usd": 0.48341
                                },
                                "converted_volume": {
                                    "btc": 14.551846,
                                    "eth": 294.617,
                                    "usd": 942191
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.754717,
                                "timestamp": "2024-08-01T12:28:15+00:00",
                                "last_traded_at": "2024-08-01T12:28:15+00:00",
                                "last_fetch_at": "2024-08-01T12:28:15+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/KUJI_USDT",
                                "coin_id": "kujira",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "BNB Chain Ecosystem",
                            "Cosmos Ecosystem",
                            "Arbitrum Ecosystem",
                            "Ethereum Ecosystem",
                            "Optimism Ecosystem",
                            "Kujira Ecosystem",
                            "Osmosis Ecosystem",
                            "Secret Ecosystem"
                        ]
                    },
                    {
                        "id": "aleph-zero",
                        "symbol": "azero",
                        "name": "Aleph Zero",
                        "current_price": 0.501487,
                        "market_cap": 162835386,
                        "fully_diluted_valuation": 184477044,
                        "price_change_percentage_24h": -2.99461,
                        "circulating_supply": 324704782.389,
                        "total_supply": 367859712.438771,
                        "circulating_supply_percentage": 88.26864465160642,
                        "price_change_percentage_7d": 14.96392,
                        "current_sentiment_positive": 87.88,
                        "trade_pair": "AZEROUSDT",
                        "description": "Aleph Zero is an enterprise-ready, high-performance blockchain platform with a novel, Directed Acyclic Graph (DAG)-based consensus protocol that has been peer-reviewed and presented at an ACM conference. To date, Aleph Zero raised $15m for continued development, integrating with the Substrate stack, and expanding the team. In 2022, Aleph Zero plans to enable privacy-enhancing features based on secure multi-party computation research and zero-knowledge proofs.",
                        "links": {
                            "homepage": [
                                "https://alephzero.org/"
                            ],
                            "blockchain_site": [
                                "https://mainnet.alephzero.org/",
                                "https://alephzero.subscan.io/"
                            ],
                            "official_forum_url": [
                                "https://www.facebook.com/AlephZeroFoundation"
                            ],
                            "chat_url": [
                                "https://www.instagram.com/alephzerofoundation/",
                                "https://discord.com/invite/alephzero",
                                "https://www.linkedin.com/company/alephzero/"
                            ],
                            "announcement_url": [
                                "https://alephzero.org/blog"
                            ],
                            "twitter_screen_name": "Aleph__Zero",
                            "telegram_channel_identifier": "AlephZeroAnnouncements",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/aleph-zero-foundation"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "AZERO",
                                "target": "USDT",
                                "market": {
                                    "name": "HTX",
                                    "identifier": "huobi",
                                    "has_trading_incentive": false
                                },
                                "last": 0.5029,
                                "volume": 210790.07351569415,
                                "converted_last": {
                                    "btc": 7.76e-06,
                                    "eth": 0.00015716,
                                    "usd": 0.502599
                                },
                                "converted_volume": {
                                    "btc": 1.599427,
                                    "eth": 32.382048,
                                    "usd": 103558
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.376835,
                                "timestamp": "2024-08-01T12:27:48+00:00",
                                "last_traded_at": "2024-08-01T12:27:48+00:00",
                                "last_fetch_at": "2024-08-01T12:28:31+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.huobi.com/en-us/exchange/azero_usdt",
                                "coin_id": "aleph-zero",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AZERO",
                                "target": "USDT",
                                "market": {
                                    "name": "KuCoin",
                                    "identifier": "kucoin",
                                    "has_trading_incentive": false
                                },
                                "last": 0.5013,
                                "volume": 2000131.90056758,
                                "converted_last": {
                                    "btc": 7.74e-06,
                                    "eth": 0.00015666,
                                    "usd": 0.501
                                },
                                "converted_volume": {
                                    "btc": 15.476585,
                                    "eth": 313.339,
                                    "usd": 1002066
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.199045,
                                "timestamp": "2024-08-01T12:28:39+00:00",
                                "last_traded_at": "2024-08-01T12:28:39+00:00",
                                "last_fetch_at": "2024-08-01T12:28:39+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.kucoin.com/trade/AZERO-USDT",
                                "coin_id": "aleph-zero",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AZERO",
                                "target": "USDT",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.5017,
                                "volume": 2121259.54,
                                "converted_last": {
                                    "btc": 7.74e-06,
                                    "eth": 0.00015678,
                                    "usd": 0.5014
                                },
                                "converted_volume": {
                                    "btc": 16.426942,
                                    "eth": 332.58,
                                    "usd": 1063599
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.019916,
                                "timestamp": "2024-08-01T12:28:13+00:00",
                                "last_traded_at": "2024-08-01T12:28:13+00:00",
                                "last_fetch_at": "2024-08-01T12:28:13+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/AZERO_USDT",
                                "coin_id": "aleph-zero",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AZERO",
                                "target": "USDC",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.5017,
                                "volume": 249078.9,
                                "converted_last": {
                                    "btc": 7.75e-06,
                                    "eth": 0.00015689,
                                    "usd": 0.501729
                                },
                                "converted_volume": {
                                    "btc": 1.930124,
                                    "eth": 39.077352,
                                    "usd": 124970
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.199124,
                                "timestamp": "2024-08-01T12:28:14+00:00",
                                "last_traded_at": "2024-08-01T12:28:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:14+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/AZERO_USDC",
                                "coin_id": "aleph-zero",
                                "target_coin_id": "usd-coin"
                            }
                        ],
                        "categories": [
                            "Smart Contract Platform",
                            "Layer 1 (L1)",
                            "Layer 2 (L2)",
                            "Zero Knowledge (ZK)",
                            "Rollup"
                        ]
                    },
                    {
                        "id": "ethos",
                        "symbol": "vgx",
                        "name": "VGX Token",
                        "current_price": 0.069894,
                        "market_cap": 25762229,
                        "fully_diluted_valuation": 25938917,
                        "price_change_percentage_24h": -1.13164,
                        "circulating_supply": 368402610.6263411,
                        "total_supply": 370929270.59886277,
                        "max_supply": 370929270.59886277,
                        "circulating_supply_percentage": 99.31882971423572,
                        "price_change_percentage_7d": -0.09604,
                        "current_sentiment_positive": 96.88,
                        "trade_pair": "VGXUSDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
                        "description": "The VGX token serves as a cross-platform and cross-chain token focused on the gaming space. The goal of the VGX Foundation is to partner with projects and companies to integrate VGX in games and platforms, offering rewards and ownership for players regardless of the chain the game is built on.",
                        "links": {
                            "homepage": [
                                "https://www.vgxfoundation.com/"
                            ],
                            "blockchain_site": [
                                "https://etherscan.io/address/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
                                "https://etherscan.io/token/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
                                "https://ethplorer.io/address/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d"
                            ],
                            "official_forum_url": [
                                "https://medium.com/@vgxfoundation"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/GKyaFWqMgH"
                            ],
                            "twitter_screen_name": "VGXFoundation",
                            "telegram_channel_identifier": "vgxfoundation",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {}
                        },
                        "tickers": [
                            {
                                "base": "VGX",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0701,
                                "volume": 20177952.6,
                                "converted_last": {
                                    "btc": 1.08e-06,
                                    "eth": 2.187e-05,
                                    "usd": 0.07006
                                },
                                "converted_volume": {
                                    "btc": 21.763882,
                                    "eth": 440.34,
                                    "usd": 1410754
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.142653,
                                "timestamp": "2024-08-01T12:20:33+00:00",
                                "last_traded_at": "2024-08-01T12:20:33+00:00",
                                "last_fetch_at": "2024-08-01T12:21:11+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/VGX_USDT?ref=37754157",
                                "coin_id": "ethos",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "VGX",
                                "target": "USDT",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0698,
                                "volume": 481396.49,
                                "converted_last": {
                                    "btc": 1.08e-06,
                                    "eth": 2.182e-05,
                                    "usd": 0.069762
                                },
                                "converted_volume": {
                                    "btc": 0.51862573,
                                    "eth": 10.505793,
                                    "usd": 33583
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.142857,
                                "timestamp": "2024-08-01T12:25:24+00:00",
                                "last_traded_at": "2024-08-01T12:25:24+00:00",
                                "last_fetch_at": "2024-08-01T12:25:24+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/VGX_USDT",
                                "coin_id": "ethos",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "VGX",
                                "target": "USDT",
                                "market": {
                                    "name": "Bitget",
                                    "identifier": "bitget",
                                    "has_trading_incentive": false
                                },
                                "last": 0.07005,
                                "volume": 643689.4,
                                "converted_last": {
                                    "btc": 1.08e-06,
                                    "eth": 2.189e-05,
                                    "usd": 0.070008
                                },
                                "converted_volume": {
                                    "btc": 0.69327783,
                                    "eth": 14.036122,
                                    "usd": 44888
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.555952,
                                "timestamp": "2024-08-01T12:28:23+00:00",
                                "last_traded_at": "2024-08-01T12:28:23+00:00",
                                "last_fetch_at": "2024-08-01T12:28:23+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bitget.com/spot/VGXUSDT",
                                "coin_id": "ethos",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Gaming (GameFi)",
                            "Ethereum Ecosystem",
                            "GalaChain Ecosystem",
                            "Galaxy Digital Portfolio"
                        ]
                    },
                    {
                        "id": "layer3",
                        "symbol": "l3",
                        "name": "Layer3",
                        "current_price": 0.081425,
                        "market_cap": 30307303,
                        "fully_diluted_valuation": 272017888,
                        "price_change_percentage_24h": -11.67631,
                        "circulating_supply": 371388607.846459,
                        "total_supply": 3333333333.0,
                        "max_supply": 3333333333.0,
                        "circulating_supply_percentage": 11.141658236507936,
                        "price_change_percentage_7d": 0.0,
                        "current_sentiment_positive": 71.25,
                        "trade_pair": "L3USDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0x88909d489678dd17aa6d9609f89b0419bf78fd9a",
                        "links": {
                            "homepage": [
                                "https://layer3.xyz/"
                            ],
                            "whitepaper": "https://docs.layer3foundation.org/tokenomics",
                            "blockchain_site": [
                                "https://etherscan.io/address/0x88909d489678dd17aa6d9609f89b0419bf78fd9a",
                                "https://etherscan.io/token/0x88909D489678dD17aA6D9609F89B0419Bf78FD9a",
                                "https://ethplorer.io/address/0x88909d489678dd17aa6d9609f89b0419bf78fd9a"
                            ],
                            "official_forum_url": [
                                "https://app.layer3.xyz/blog"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/layer3"
                            ],
                            "twitter_screen_name": "layer3xyz",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/layer3xyz"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "L3",
                                "target": "USDT",
                                "market": {
                                    "name": "Bybit",
                                    "identifier": "bybit_spot",
                                    "has_trading_incentive": false
                                },
                                "last": 0.08129,
                                "volume": 115971558.4,
                                "converted_last": {
                                    "btc": 1.25e-06,
                                    "eth": 2.54e-05,
                                    "usd": 0.081241
                                },
                                "converted_volume": {
                                    "btc": 153.034,
                                    "eth": 3098,
                                    "usd": 9908551
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.049182,
                                "timestamp": "2024-08-01T12:28:18+00:00",
                                "last_traded_at": "2024-08-01T12:28:18+00:00",
                                "last_fetch_at": "2024-08-01T12:28:18+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bybit.com/trade/spot/L3/USDT",
                                "coin_id": "layer3",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "L3",
                                "target": "USDT",
                                "market": {
                                    "name": "KuCoin",
                                    "identifier": "kucoin",
                                    "has_trading_incentive": false
                                },
                                "last": 0.08127,
                                "volume": 28102468.3,
                                "converted_last": {
                                    "btc": 1.26e-06,
                                    "eth": 2.541e-05,
                                    "usd": 0.081259
                                },
                                "converted_volume": {
                                    "btc": 35.269191,
                                    "eth": 714.061,
                                    "usd": 2283582
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.0246,
                                "timestamp": "2024-08-01T12:28:03+00:00",
                                "last_traded_at": "2024-08-01T12:28:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.kucoin.com/trade/L3-USDT",
                                "coin_id": "layer3",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "L3",
                                "target": "USD",
                                "market": {
                                    "name": "Kraken",
                                    "identifier": "kraken",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0815,
                                "volume": 3152706.50587,
                                "converted_last": {
                                    "btc": 1.26e-06,
                                    "eth": 2.548e-05,
                                    "usd": 0.0815
                                },
                                "converted_volume": {
                                    "btc": 3.968442,
                                    "eth": 80.345,
                                    "usd": 256946
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.123001,
                                "timestamp": "2024-08-01T12:26:48+00:00",
                                "last_traded_at": "2024-08-01T12:26:48+00:00",
                                "last_fetch_at": "2024-08-01T12:28:22+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://pro.kraken.com/app/trade/L3-USD",
                                "coin_id": "layer3"
                            },
                            {
                                "base": "L3",
                                "target": "EUR",
                                "market": {
                                    "name": "Kraken",
                                    "identifier": "kraken",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0723,
                                "volume": 196557.31567,
                                "converted_last": {
                                    "btc": 1.21e-06,
                                    "eth": 2.44e-05,
                                    "usd": 0.078046
                                },
                                "converted_volume": {
                                    "btc": 0.23693077,
                                    "eth": 4.796907,
                                    "usd": 15340.61
                                },
                                "bid_ask_spread_percentage": 7.790549,
                                "timestamp": "2024-08-01T12:15:28+00:00",
                                "last_traded_at": "2024-08-01T12:15:28+00:00",
                                "last_fetch_at": "2024-08-01T12:28:22+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://pro.kraken.com/app/trade/L3-EUR",
                                "coin_id": "layer3"
                            }
                        ],
                        "categories": [
                            "Marketing",
                            "Ethereum Ecosystem",
                            "Quest-to-Earn"
                        ]
                    },
                    {
                        "id": "solana",
                        "symbol": "sol",
                        "name": "Solana",
                        "current_price": 170.5,
                        "market_cap": 79326371939,
                        "fully_diluted_valuation": 99117220169,
                        "price_change_percentage_24h": -6.22056,
                        "circulating_supply": 465268049.072812,
                        "total_supply": 581346083.660925,
                        "circulating_supply_percentage": 80.03288611542165,
                        "price_change_percentage_7d": 0.9785,
                        "current_sentiment_positive": 70.18,
                        "trade_pair": "SOLUSDT",
                        "description": "Solana is a highly functional open source project that banks on blockchain technology\u2019s permissionless nature to provide decentralized finance (DeFi) solutions. It is a layer 1 network that offers fast speeds and affordable costs. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.",
                        "links": {
                            "homepage": [
                                "https://solana.com/"
                            ],
                            "blockchain_site": [
                                "https://solscan.io/",
                                "https://xray.helius.xyz/",
                                "https://solana.fm/",
                                "https://solanabeach.io/",
                                "https://www.oklink.com/sol",
                                "https://explorer.solana.com/"
                            ],
                            "twitter_screen_name": "solana",
                            "telegram_channel_identifier": "solana",
                            "subreddit_url": "https://www.reddit.com/r/solana",
                            "repos_url": {
                                "github": [
                                    "https://github.com/solana-labs/solana"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "SOL",
                                "target": "FDUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 170.95,
                                "volume": 2502378.711,
                                "converted_last": {
                                    "btc": 0.00263781,
                                    "eth": 0.05340522,
                                    "usd": 170.79
                                },
                                "converted_volume": {
                                    "btc": 6723,
                                    "eth": 136112,
                                    "usd": 435288058
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.011698,
                                "timestamp": "2024-08-01T12:27:04+00:00",
                                "last_traded_at": "2024-08-01T12:27:04+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_FDUSD?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "first-digital-usd"
                            },
                            {
                                "base": "SOL",
                                "target": "BTC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0026367,
                                "volume": 483519.144,
                                "converted_last": {
                                    "btc": 0.0026367,
                                    "eth": 0.05340885,
                                    "usd": 170.64
                                },
                                "converted_volume": {
                                    "btc": 1293,
                                    "eth": 26200,
                                    "usd": 83706955
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.013795,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:26:12+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_BTC?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "bitcoin"
                            },
                            {
                                "base": "SOL",
                                "target": "USDC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 170.8,
                                "volume": 147865.885,
                                "converted_last": {
                                    "btc": 0.00263875,
                                    "eth": 0.05342426,
                                    "usd": 170.85
                                },
                                "converted_volume": {
                                    "btc": 396.422,
                                    "eth": 8026,
                                    "usd": 25667215
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.015855,
                                "timestamp": "2024-08-01T12:26:14+00:00",
                                "last_traded_at": "2024-08-01T12:26:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_USDC?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "usd-coin"
                            },
                            {
                                "base": "SOL",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0534,
                                "volume": 69830.061,
                                "converted_last": {
                                    "btc": 0.00263796,
                                    "eth": 0.05340821,
                                    "usd": 170.8
                                },
                                "converted_volume": {
                                    "btc": 185.422,
                                    "eth": 3754,
                                    "usd": 12005562
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.018723,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_ETH?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "SOL",
                                "target": "EUR",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 158.37,
                                "volume": 35341.024,
                                "converted_last": {
                                    "btc": 0.00264168,
                                    "eth": 0.05350975,
                                    "usd": 170.96
                                },
                                "converted_volume": {
                                    "btc": 94.578,
                                    "eth": 1916,
                                    "usd": 6120667
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.031874,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:26:11+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_EUR?ref=37754157",
                                "coin_id": "solana"
                            },
                            {
                                "base": "SOL",
                                "target": "TRY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5674.3,
                                "volume": 16888.088,
                                "converted_last": {
                                    "btc": 0.0026487,
                                    "eth": 0.05362562,
                                    "usd": 171.5
                                },
                                "converted_volume": {
                                    "btc": 45.646248,
                                    "eth": 924.155,
                                    "usd": 2955467
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.051075,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_TRY?ref=37754157",
                                "coin_id": "solana"
                            },
                            {
                                "base": "SOL",
                                "target": "BNB",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.2979,
                                "volume": 14753.243,
                                "converted_last": {
                                    "btc": 0.00263552,
                                    "eth": 0.05335884,
                                    "usd": 170.64
                                },
                                "converted_volume": {
                                    "btc": 39.218221,
                                    "eth": 794.013,
                                    "usd": 2539271
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.100604,
                                "timestamp": "2024-08-01T12:28:03+00:00",
                                "last_traded_at": "2024-08-01T12:28:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_BNB?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "binancecoin"
                            },
                            {
                                "base": "SOL",
                                "target": "BRL",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 973.4,
                                "volume": 7216.768,
                                "converted_last": {
                                    "btc": 0.00265194,
                                    "eth": 0.05369126,
                                    "usd": 171.71
                                },
                                "converted_volume": {
                                    "btc": 19.549775,
                                    "eth": 395.805,
                                    "usd": 1265793
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.061602,
                                "timestamp": "2024-08-01T12:28:03+00:00",
                                "last_traded_at": "2024-08-01T12:28:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_BRL?ref=37754157",
                                "coin_id": "solana"
                            },
                            {
                                "base": "SOL",
                                "target": "JPY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 25850.0,
                                "volume": 1074.104,
                                "converted_last": {
                                    "btc": 0.00264801,
                                    "eth": 0.05360564,
                                    "usd": 171.53
                                },
                                "converted_volume": {
                                    "btc": 2.852797,
                                    "eth": 57.751,
                                    "usd": 184797
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.397177,
                                "timestamp": "2024-08-01T12:23:19+00:00",
                                "last_traded_at": "2024-08-01T12:23:19+00:00",
                                "last_fetch_at": "2024-08-01T12:23:19+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_JPY?ref=37754157",
                                "coin_id": "solana"
                            },
                            {
                                "base": "SOL",
                                "target": "TUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 171.35,
                                "volume": 667.302,
                                "converted_last": {
                                    "btc": 0.00264057,
                                    "eth": 0.05345505,
                                    "usd": 171.05
                                },
                                "converted_volume": {
                                    "btc": 1.785841,
                                    "eth": 36.15212,
                                    "usd": 115682
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.215731,
                                "timestamp": "2024-08-01T12:20:12+00:00",
                                "last_traded_at": "2024-08-01T12:20:12+00:00",
                                "last_fetch_at": "2024-08-01T12:23:16+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_TUSD?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "true-usd"
                            },
                            {
                                "base": "SOL",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 169.74,
                                "volume": 4154972.93,
                                "converted_last": {
                                    "btc": 0.00262461,
                                    "eth": 0.05320251,
                                    "usd": 169.63
                                },
                                "converted_volume": {
                                    "btc": 11146,
                                    "eth": 225935,
                                    "usd": 720370213
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.015893,
                                "timestamp": "2024-08-01T12:02:09+00:00",
                                "last_traded_at": "2024-08-01T12:02:09+00:00",
                                "last_fetch_at": "2024-08-01T12:02:09+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_USDT?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Smart Contract Platform",
                            "Solana Ecosystem",
                            "Layer 1 (L1)",
                            "Alleged SEC Securities",
                            "FTX Holdings",
                            "Multicoin Capital Portfolio",
                            "Proof of Stake (PoS)",
                            "Alameda Research Portfolio",
                            "Andreessen Horowitz (a16z) Portfolio",
                            "GMCI Layer 1 Index",
                            "GMCI 30 Index",
                            "Delphi Digital Portfolio"
                        ]
                    },
                    {
                        "id": "aave",
                        "symbol": "aave",
                        "name": "Aave",
                        "current_price": 114.93,
                        "market_cap": 1707689737,
                        "fully_diluted_valuation": 1834901130,
                        "price_change_percentage_24h": 8.13461,
                        "circulating_supply": 14890740.077001669,
                        "total_supply": 16000000.0,
                        "max_supply": 16000000.0,
                        "circulating_supply_percentage": 93.06712548126043,
                        "price_change_percentage_7d": 31.36098,
                        "current_sentiment_positive": 84.62,
                        "trade_pair": "AAVEUSDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
                        "description": "Aave is a decentralized money market protocol where users can lend and borrow cryptocurrency across 20 different assets as collateral. The protocol has a native token called AAVE, which is also a governance token that lets the community decide the direction of the protocol in a collective manner. Lenders can\u00a0earn interest by providing liquidity to the market, while borrowers can borrow by collateralizing their cryptoassets to take out loans from the liquidity pools.",
                        "links": {
                            "homepage": [
                                "https://app.aave.com/"
                            ],
                            "whitepaper": "https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf",
                            "blockchain_site": [
                                "https://etherscan.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
                                "https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
                                "https://ethplorer.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
                                "https://hecoinfo.com/token/0x202b4936fe1a82a4965220860ae46d7d3939bb25",
                                "https://polygonscan.com/token/0xd6df932a45c0f255f85145f286ea0b292b21c90b",
                                "https://snowtrace.io/token/0x63a72806098bd3d9520cc43356dd78afe5d386d9",
                                "https://nearblocks.io/token/7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.factory.bridge.near",
                                "https://ftmscan.com/token/0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b",
                                "https://scan.meter.io/address/0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b",
                                "https://optimistic.etherscan.io/token/0x76fb31fb4af56892a25e32cfc43de717950c9278",
                                "https://avascan.info/blockchain/c/address/0x63a72806098bd3d9520cc43356dd78afe5d386d9/token"
                            ],
                            "official_forum_url": [
                                "https://www.instagram.com/aave.aave/"
                            ],
                            "chat_url": [
                                "https://aave.com/discord"
                            ],
                            "twitter_screen_name": "aave",
                            "facebook_username": "AaveCom",
                            "bitcointalk_thread_identifier": 2090735,
                            "telegram_channel_identifier": "Aavesome",
                            "subreddit_url": "https://www.reddit.com/r/Aave_Official",
                            "repos_url": {
                                "github": [
                                    "https://github.com/aave/aave-protocol"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "AAVE",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 115.23,
                                "volume": 410699.342,
                                "converted_last": {
                                    "btc": 0.00177954,
                                    "eth": 0.0360463,
                                    "usd": 115.16
                                },
                                "converted_volume": {
                                    "btc": 695.81,
                                    "eth": 14094,
                                    "usd": 45029592
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.02613,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:26:11+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AAVE_USDT?ref=37754157",
                                "coin_id": "aave",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AAVE",
                                "target": "BTC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001769,
                                "volume": 11818.902,
                                "converted_last": {
                                    "btc": 0.001769,
                                    "eth": 0.03580095,
                                    "usd": 114.64
                                },
                                "converted_volume": {
                                    "btc": 20.078407,
                                    "eth": 406.346,
                                    "usd": 1301177
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.056561,
                                "timestamp": "2024-08-01T12:20:11+00:00",
                                "last_traded_at": "2024-08-01T12:20:11+00:00",
                                "last_fetch_at": "2024-08-01T12:22:09+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AAVE_BTC?ref=37754157",
                                "coin_id": "aave",
                                "target_coin_id": "bitcoin"
                            },
                            {
                                "base": "AAVE",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.03562,
                                "volume": 4573.941,
                                "converted_last": {
                                    "btc": 0.00175642,
                                    "eth": 0.03561251,
                                    "usd": 113.64
                                },
                                "converted_volume": {
                                    "btc": 7.637268,
                                    "eth": 154.85,
                                    "usd": 494117
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.140687,
                                "timestamp": "2024-08-01T12:11:05+00:00",
                                "last_traded_at": "2024-08-01T12:11:05+00:00",
                                "last_fetch_at": "2024-08-01T12:11:05+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AAVE_ETH?ref=37754157",
                                "coin_id": "aave",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "AAVE",
                                "target": "TRY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3812.0,
                                "volume": 3698.931,
                                "converted_last": {
                                    "btc": 0.00178027,
                                    "eth": 0.03606112,
                                    "usd": 115.21
                                },
                                "converted_volume": {
                                    "btc": 6.377294,
                                    "eth": 129.178,
                                    "usd": 412709
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.106213,
                                "timestamp": "2024-08-01T12:26:15+00:00",
                                "last_traded_at": "2024-08-01T12:26:15+00:00",
                                "last_fetch_at": "2024-08-01T12:26:15+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AAVE_TRY?ref=37754157",
                                "coin_id": "aave"
                            }
                        ],
                        "categories": [
                            "Decentralized Finance (DeFi)",
                            "Governance",
                            "Yield Farming",
                            "BNB Chain Ecosystem",
                            "Lending/Borrowing",
                            "Avalanche Ecosystem",
                            "Polygon Ecosystem",
                            "Near Protocol Ecosystem",
                            "Fantom Ecosystem",
                            "Harmony Ecosystem",
                            "Ethereum Ecosystem",
                            "Optimism Ecosystem",
                            "Index Coop Defi Index",
                            "GMCI DeFi Index",
                            "Blockchain Capital Portfolio"
                        ]
                    },
                    {
                        "id": "ethereum",
                        "symbol": "eth",
                        "name": "Ethereum",
                        "current_price": 3198.15,
                        "market_cap": 384385768310,
                        "fully_diluted_valuation": 384385768310,
                        "price_change_percentage_24h": -3.60244,
                        "circulating_supply": 120251313.934882,
                        "total_supply": 120251313.934882,
                        "circulating_supply_percentage": 100.0,
                        "price_change_percentage_7d": 0.77773,
                        "current_sentiment_positive": 80.22,
                        "trade_pair": "ETHUSDT",
                        "description": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                        "links": {
                            "homepage": [
                                "https://www.ethereum.org/"
                            ],
                            "blockchain_site": [
                                "https://etherscan.io/",
                                "https://ethplorer.io/",
                                "https://blockchair.com/ethereum",
                                "https://eth.tokenview.io/",
                                "https://www.oklink.com/eth",
                                "https://3xpl.com/ethereum"
                            ],
                            "twitter_screen_name": "ethereum",
                            "subreddit_url": "https://www.reddit.com/r/ethereum",
                            "repos_url": {
                                "github": [
                                    "https://github.com/ethereum/go-ethereum",
                                    "https://github.com/ethereum/py-evm",
                                    "https://github.com/ethereum/aleth",
                                    "https://github.com/ethereum/web3.py",
                                    "https://github.com/ethereum/solidity",
                                    "https://github.com/ethereum/sharding",
                                    "https://github.com/ethereum/casper",
                                    "https://github.com/paritytech/parity"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "ETH",
                                "target": "FDUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3201.49,
                                "volume": 859821.4326,
                                "converted_last": {
                                    "btc": 0.04943411,
                                    "eth": 1.001535,
                                    "usd": 3201.39
                                },
                                "converted_volume": {
                                    "btc": 43021,
                                    "eth": 871600,
                                    "usd": 2786059064
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.010016,
                                "timestamp": "2024-08-01T12:15:06+00:00",
                                "last_traded_at": "2024-08-01T12:15:06+00:00",
                                "last_fetch_at": "2024-08-01T12:15:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_FDUSD?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "first-digital-usd"
                            },
                            {
                                "base": "ETH",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3200.99,
                                "volume": 279031.6786,
                                "converted_last": {
                                    "btc": 0.04936356,
                                    "eth": 0.99901773,
                                    "usd": 3199.0
                                },
                                "converted_volume": {
                                    "btc": 13937,
                                    "eth": 282049,
                                    "usd": 903160559
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.010312,
                                "timestamp": "2024-08-01T12:22:09+00:00",
                                "last_traded_at": "2024-08-01T12:22:09+00:00",
                                "last_fetch_at": "2024-08-01T12:22:09+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_USDT?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "ETH",
                                "target": "BTC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.04939,
                                "volume": 31549.321,
                                "converted_last": {
                                    "btc": 0.04939,
                                    "eth": 0.99928753,
                                    "usd": 3201.5
                                },
                                "converted_volume": {
                                    "btc": 1570,
                                    "eth": 31768,
                                    "usd": 101778973
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.020231,
                                "timestamp": "2024-08-01T12:21:10+00:00",
                                "last_traded_at": "2024-08-01T12:21:10+00:00",
                                "last_fetch_at": "2024-08-01T12:21:10+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "bitcoin"
                            },
                            {
                                "base": "ETH",
                                "target": "USDC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3198.4,
                                "volume": 26240.5452,
                                "converted_last": {
                                    "btc": 0.04941327,
                                    "eth": 1.000422,
                                    "usd": 3199.37
                                },
                                "converted_volume": {
                                    "btc": 1310,
                                    "eth": 26530,
                                    "usd": 84842010
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.010313,
                                "timestamp": "2024-08-01T12:26:13+00:00",
                                "last_traded_at": "2024-08-01T12:26:13+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_USDC?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "usd-coin"
                            },
                            {
                                "base": "SOL",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0534,
                                "volume": 69830.061,
                                "converted_last": {
                                    "btc": 0.00263796,
                                    "eth": 0.05340821,
                                    "usd": 170.8
                                },
                                "converted_volume": {
                                    "btc": 185.422,
                                    "eth": 3754,
                                    "usd": 12005562
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.018723,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SOL_ETH?ref=37754157",
                                "coin_id": "solana",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "EUR",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2965.8,
                                "volume": 1979.9755,
                                "converted_last": {
                                    "btc": 0.04944653,
                                    "eth": 1.001096,
                                    "usd": 3201.53
                                },
                                "converted_volume": {
                                    "btc": 98.68,
                                    "eth": 1998,
                                    "usd": 6389243
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.010337,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_EUR?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "TRY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 106025.0,
                                "volume": 1058.5931,
                                "converted_last": {
                                    "btc": 0.04953164,
                                    "eth": 1.00416,
                                    "usd": 3203.65
                                },
                                "converted_volume": {
                                    "btc": 53.292,
                                    "eth": 1080,
                                    "usd": 3446873
                                },
                                "bid_ask_spread_percentage": 0.016604,
                                "timestamp": "2024-08-01T12:09:07+00:00",
                                "last_traded_at": "2024-08-01T12:09:07+00:00",
                                "last_fetch_at": "2024-08-01T12:09:07+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_TRY?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "WBETH",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.0449,
                                "volume": 708.931,
                                "converted_last": {
                                    "btc": 0.05152402,
                                    "eth": 1.04468,
                                    "usd": 3333.51
                                },
                                "converted_volume": {
                                    "btc": 36.522412,
                                    "eth": 740.514,
                                    "usd": 2362933
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.019137,
                                "timestamp": "2024-08-01T12:11:07+00:00",
                                "last_traded_at": "2024-08-01T12:11:07+00:00",
                                "last_fetch_at": "2024-08-01T12:11:07+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WBETH_ETH?ref=37754157",
                                "coin_id": "wrapped-beacon-eth",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "BNB",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.1791,
                                "volume": 4082.986,
                                "converted_last": {
                                    "btc": 0.00884754,
                                    "eth": 0.17916787,
                                    "usd": 572.61
                                },
                                "converted_volume": {
                                    "btc": 35.906183,
                                    "eth": 727.121,
                                    "usd": 2323841
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.055772,
                                "timestamp": "2024-08-01T12:26:08+00:00",
                                "last_traded_at": "2024-08-01T12:26:08+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/BNB_ETH?ref=37754157",
                                "coin_id": "binancecoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "TUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3200.09,
                                "volume": 604.0838,
                                "converted_last": {
                                    "btc": 0.04934339,
                                    "eth": 0.99900763,
                                    "usd": 3194.85
                                },
                                "converted_volume": {
                                    "btc": 30.166743,
                                    "eth": 610.757,
                                    "usd": 1953213
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.024992,
                                "timestamp": "2024-08-01T12:26:13+00:00",
                                "last_traded_at": "2024-08-01T12:26:13+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_TUSD?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "true-usd"
                            },
                            {
                                "base": "XRP",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.000191,
                                "volume": 1393368.0,
                                "converted_last": {
                                    "btc": 9.44e-06,
                                    "eth": 0.00019103,
                                    "usd": 0.610916
                                },
                                "converted_volume": {
                                    "btc": 13.272287,
                                    "eth": 268.711,
                                    "usd": 859344
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.052301,
                                "timestamp": "2024-08-01T12:23:14+00:00",
                                "last_traded_at": "2024-08-01T12:23:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/XRP_ETH?ref=37754157",
                                "coin_id": "ripple",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "AAVE",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.03562,
                                "volume": 4573.941,
                                "converted_last": {
                                    "btc": 0.00175642,
                                    "eth": 0.03561251,
                                    "usd": 113.64
                                },
                                "converted_volume": {
                                    "btc": 7.637268,
                                    "eth": 154.85,
                                    "usd": 494117
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.140687,
                                "timestamp": "2024-08-01T12:11:05+00:00",
                                "last_traded_at": "2024-08-01T12:11:05+00:00",
                                "last_fetch_at": "2024-08-01T12:11:05+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AAVE_ETH?ref=37754157",
                                "coin_id": "aave",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "DAI",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3199.86,
                                "volume": 139.3465,
                                "converted_last": {
                                    "btc": 0.04940437,
                                    "eth": 0.9997107,
                                    "usd": 3199.54
                                },
                                "converted_volume": {
                                    "btc": 6.939666,
                                    "eth": 140.426,
                                    "usd": 449429
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.034799,
                                "timestamp": "2024-08-01T12:18:07+00:00",
                                "last_traded_at": "2024-08-01T12:18:07+00:00",
                                "last_fetch_at": "2024-08-01T12:18:07+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_DAI?ref=37754157",
                                "coin_id": "ethereum",
                                "target_coin_id": "dai"
                            },
                            {
                                "base": "TRX",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 4.025e-05,
                                "volume": 3091410.0,
                                "converted_last": {
                                    "btc": 1.99e-06,
                                    "eth": 4.026e-05,
                                    "usd": 0.12874
                                },
                                "converted_volume": {
                                    "btc": 6.110683,
                                    "eth": 123.717,
                                    "usd": 395650
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.074405,
                                "timestamp": "2024-08-01T12:28:03+00:00",
                                "last_traded_at": "2024-08-01T12:28:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/TRX_ETH?ref=37754157",
                                "coin_id": "tron",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "LTC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.02206,
                                "volume": 4423.995,
                                "converted_last": {
                                    "btc": 0.00109043,
                                    "eth": 0.02205559,
                                    "usd": 70.68
                                },
                                "converted_volume": {
                                    "btc": 4.769108,
                                    "eth": 96.463,
                                    "usd": 309148
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.04531,
                                "timestamp": "2024-08-01T12:20:05+00:00",
                                "last_traded_at": "2024-08-01T12:20:05+00:00",
                                "last_fetch_at": "2024-08-01T12:20:05+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/LTC_ETH?ref=37754157",
                                "coin_id": "litecoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "MATIC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001562,
                                "volume": 501494.0,
                                "converted_last": {
                                    "btc": 7.7e-06,
                                    "eth": 0.00015614,
                                    "usd": 0.498197
                                },
                                "converted_volume": {
                                    "btc": 3.818839,
                                    "eth": 77.415,
                                    "usd": 247011
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.06398,
                                "timestamp": "2024-08-01T12:06:06+00:00",
                                "last_traded_at": "2024-08-01T12:06:06+00:00",
                                "last_fetch_at": "2024-08-01T12:08:09+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/MATIC_ETH?ref=37754157",
                                "coin_id": "matic-network",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ENJ",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5.47e-05,
                                "volume": 827995.8,
                                "converted_last": {
                                    "btc": 2.7e-06,
                                    "eth": 5.471e-05,
                                    "usd": 0.174959
                                },
                                "converted_volume": {
                                    "btc": 2.21246,
                                    "eth": 44.793534,
                                    "usd": 143251
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.363636,
                                "timestamp": "2024-08-01T12:23:12+00:00",
                                "last_traded_at": "2024-08-01T12:23:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ENJ_ETH?ref=37754157",
                                "coin_id": "enjincoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "POWR",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 6.68e-05,
                                "volume": 618724.0,
                                "converted_last": {
                                    "btc": 3.3e-06,
                                    "eth": 6.681e-05,
                                    "usd": 0.213661
                                },
                                "converted_volume": {
                                    "btc": 2.049487,
                                    "eth": 41.493972,
                                    "usd": 132699
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.149254,
                                "timestamp": "2024-08-01T11:29:03+00:00",
                                "last_traded_at": "2024-08-01T11:29:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/POWR_ETH?ref=37754157",
                                "coin_id": "power-ledger",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ADX",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 4.844e-05,
                                "volume": 803344.0,
                                "converted_last": {
                                    "btc": 2.39e-06,
                                    "eth": 4.845e-05,
                                    "usd": 0.154936
                                },
                                "converted_volume": {
                                    "btc": 1.960679,
                                    "eth": 39.695968,
                                    "usd": 126949
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.061868,
                                "timestamp": "2024-08-01T12:23:12+00:00",
                                "last_traded_at": "2024-08-01T12:23:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ADX_ETH?ref=37754157",
                                "coin_id": "adex",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ZIL",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5.05e-06,
                                "volume": 7554513.0,
                                "converted_last": {
                                    "btc": 2.49369e-07,
                                    "eth": 5.05e-06,
                                    "usd": 0.01614987
                                },
                                "converted_volume": {
                                    "btc": 1.89373,
                                    "eth": 38.340041,
                                    "usd": 122644
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.394477,
                                "timestamp": "2024-08-01T11:52:04+00:00",
                                "last_traded_at": "2024-08-01T11:52:04+00:00",
                                "last_fetch_at": "2024-08-01T12:16:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ZIL_ETH?ref=37754157",
                                "coin_id": "zilliqa",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "MANA",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 9.74e-05,
                                "volume": 397313.0,
                                "converted_last": {
                                    "btc": 4.81e-06,
                                    "eth": 9.741e-05,
                                    "usd": 0.311535
                                },
                                "converted_volume": {
                                    "btc": 1.892822,
                                    "eth": 38.322127,
                                    "usd": 122555
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.102249,
                                "timestamp": "2024-08-01T11:30:06+00:00",
                                "last_traded_at": "2024-08-01T11:30:06+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/MANA_ETH?ref=37754157",
                                "coin_id": "decentraland",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ADA",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001231,
                                "volume": 293765.0,
                                "converted_last": {
                                    "btc": 6.07e-06,
                                    "eth": 0.00012306,
                                    "usd": 0.392725
                                },
                                "converted_volume": {
                                    "btc": 1.75771,
                                    "eth": 35.634045,
                                    "usd": 113721
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.081967,
                                "timestamp": "2024-08-01T12:12:03+00:00",
                                "last_traded_at": "2024-08-01T12:12:03+00:00",
                                "last_fetch_at": "2024-08-01T12:12:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ADA_ETH?ref=37754157",
                                "coin_id": "cardano",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "WBTC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 20.27,
                                "volume": 1.70573,
                                "converted_last": {
                                    "btc": 1.001338,
                                    "eth": 20.273117,
                                    "usd": 64834
                                },
                                "converted_volume": {
                                    "btc": 1.697334,
                                    "eth": 34.36427,
                                    "usd": 109898
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.147856,
                                "timestamp": "2024-08-01T12:23:14+00:00",
                                "last_traded_at": "2024-08-01T12:23:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WBTC_ETH?ref=37754157",
                                "coin_id": "wrapped-bitcoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "AVAX",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.008,
                                "volume": 4115.76,
                                "converted_last": {
                                    "btc": 0.0003952,
                                    "eth": 0.00800123,
                                    "usd": 25.59
                                },
                                "converted_volume": {
                                    "btc": 1.622733,
                                    "eth": 32.853904,
                                    "usd": 105067
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.249688,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AVAX_ETH?ref=37754157",
                                "coin_id": "avalanche-2",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "SNT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 7.5e-06,
                                "volume": 4299751.0,
                                "converted_last": {
                                    "btc": 3.705e-07,
                                    "eth": 7.5e-06,
                                    "usd": 0.02398884
                                },
                                "converted_volume": {
                                    "btc": 1.595805,
                                    "eth": 32.308706,
                                    "usd": 103324
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.399467,
                                "timestamp": "2024-08-01T11:41:09+00:00",
                                "last_traded_at": "2024-08-01T11:41:09+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SNT_ETH?ref=37754157",
                                "coin_id": "status",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "LINK",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.004077,
                                "volume": 7079.59,
                                "converted_last": {
                                    "btc": 0.0002014,
                                    "eth": 0.00407854,
                                    "usd": 13.03
                                },
                                "converted_volume": {
                                    "btc": 1.394969,
                                    "eth": 28.248938,
                                    "usd": 90282
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.122399,
                                "timestamp": "2024-08-01T12:27:02+00:00",
                                "last_traded_at": "2024-08-01T12:27:02+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/LINK_ETH?ref=37754157",
                                "coin_id": "chainlink",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "RUNE",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0012758,
                                "volume": 17658.177,
                                "converted_last": {
                                    "btc": 6.302e-05,
                                    "eth": 0.001276,
                                    "usd": 4.08
                                },
                                "converted_volume": {
                                    "btc": 1.161099,
                                    "eth": 23.507652,
                                    "usd": 75178
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.117261,
                                "timestamp": "2024-08-01T12:26:12+00:00",
                                "last_traded_at": "2024-08-01T12:26:12+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/RUNE_ETH?ref=37754157",
                                "coin_id": "thorchain",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ROSE",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2.452e-05,
                                "volume": 937095.8,
                                "converted_last": {
                                    "btc": 1.21e-06,
                                    "eth": 2.452e-05,
                                    "usd": 0.078428
                                },
                                "converted_volume": {
                                    "btc": 1.145604,
                                    "eth": 23.193934,
                                    "usd": 74175
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.242915,
                                "timestamp": "2024-08-01T12:18:08+00:00",
                                "last_traded_at": "2024-08-01T12:18:08+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ROSE_ETH?ref=37754157",
                                "coin_id": "oasis-network",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "EOS",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001747,
                                "volume": 125534.6,
                                "converted_last": {
                                    "btc": 8.62e-06,
                                    "eth": 0.00017459,
                                    "usd": 0.557569
                                },
                                "converted_volume": {
                                    "btc": 1.105549,
                                    "eth": 22.401925,
                                    "usd": 71542
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.228833,
                                "timestamp": "2024-08-01T12:14:04+00:00",
                                "last_traded_at": "2024-08-01T12:14:04+00:00",
                                "last_fetch_at": "2024-08-01T12:14:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/EOS_ETH?ref=37754157",
                                "coin_id": "eos",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "EGLD",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.00962,
                                "volume": 2209.729,
                                "converted_last": {
                                    "btc": 0.00047552,
                                    "eth": 0.00962221,
                                    "usd": 30.8
                                },
                                "converted_volume": {
                                    "btc": 1.057416,
                                    "eth": 21.397094,
                                    "usd": 68481
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.208333,
                                "timestamp": "2024-08-01T12:18:10+00:00",
                                "last_traded_at": "2024-08-01T12:18:10+00:00",
                                "last_fetch_at": "2024-08-01T12:18:10+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/EGLD_ETH?ref=37754157",
                                "coin_id": "elrond-erd-2",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "INJ",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.00678,
                                "volume": 2934.69,
                                "converted_last": {
                                    "btc": 0.0003348,
                                    "eth": 0.00677703,
                                    "usd": 21.68
                                },
                                "converted_volume": {
                                    "btc": 0.99233831,
                                    "eth": 20.087152,
                                    "usd": 64265
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.294551,
                                "timestamp": "2024-08-01T12:15:05+00:00",
                                "last_traded_at": "2024-08-01T12:15:05+00:00",
                                "last_fetch_at": "2024-08-01T12:17:14+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/INJ_ETH?ref=37754157",
                                "coin_id": "injective-protocol",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ARB",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.000204,
                                "volume": 94725.1,
                                "converted_last": {
                                    "btc": 1.008e-05,
                                    "eth": 0.00020391,
                                    "usd": 0.652945
                                },
                                "converted_volume": {
                                    "btc": 0.95476711,
                                    "eth": 19.32254,
                                    "usd": 61873
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.048924,
                                "timestamp": "2024-08-01T12:22:11+00:00",
                                "last_traded_at": "2024-08-01T12:22:11+00:00",
                                "last_fetch_at": "2024-08-01T12:22:11+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ARB_ETH?ref=37754157",
                                "coin_id": "arbitrum",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "UNI",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.002243,
                                "volume": 8030.255,
                                "converted_last": {
                                    "btc": 0.0001108,
                                    "eth": 0.00224334,
                                    "usd": 7.17
                                },
                                "converted_volume": {
                                    "btc": 0.88371266,
                                    "eth": 17.891671,
                                    "usd": 57218
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.044484,
                                "timestamp": "2024-08-01T12:27:04+00:00",
                                "last_traded_at": "2024-08-01T12:27:04+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/UNI_ETH?ref=37754157",
                                "coin_id": "uniswap",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ZEN",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.003148,
                                "volume": 5382.0,
                                "converted_last": {
                                    "btc": 0.00015545,
                                    "eth": 0.00314662,
                                    "usd": 10.07
                                },
                                "converted_volume": {
                                    "btc": 0.7864507,
                                    "eth": 15.919525,
                                    "usd": 50932
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.127186,
                                "timestamp": "2024-08-01T12:17:06+00:00",
                                "last_traded_at": "2024-08-01T12:17:06+00:00",
                                "last_fetch_at": "2024-08-01T12:17:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ZEN_ETH?ref=37754157",
                                "coin_id": "zencash",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "OP",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.000496,
                                "volume": 29287.57,
                                "converted_last": {
                                    "btc": 2.45e-05,
                                    "eth": 0.00049608,
                                    "usd": 1.59
                                },
                                "converted_volume": {
                                    "btc": 0.7112421,
                                    "eth": 14.399827,
                                    "usd": 46051
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.402414,
                                "timestamp": "2024-08-01T12:27:04+00:00",
                                "last_traded_at": "2024-08-01T12:27:04+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/OP_ETH?ref=37754157",
                                "coin_id": "optimism",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "FTM",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001308,
                                "volume": 104166.6,
                                "converted_last": {
                                    "btc": 6.46e-06,
                                    "eth": 0.00013078,
                                    "usd": 0.418475
                                },
                                "converted_volume": {
                                    "btc": 0.6649726,
                                    "eth": 13.461538,
                                    "usd": 43075
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.229358,
                                "timestamp": "2024-08-01T12:20:31+00:00",
                                "last_traded_at": "2024-08-01T12:20:31+00:00",
                                "last_fetch_at": "2024-08-01T12:23:16+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/FTM_ETH?ref=37754157",
                                "coin_id": "fantom",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "NEAR",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001595,
                                "volume": 8527.912,
                                "converted_last": {
                                    "btc": 7.876e-05,
                                    "eth": 0.00159538,
                                    "usd": 5.1
                                },
                                "converted_volume": {
                                    "btc": 0.66184192,
                                    "eth": 13.406233,
                                    "usd": 42831
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.125392,
                                "timestamp": "2024-08-01T12:14:02+00:00",
                                "last_traded_at": "2024-08-01T12:14:02+00:00",
                                "last_fetch_at": "2024-08-01T12:26:13+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/NEAR_ETH?ref=37754157",
                                "coin_id": "near",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "ARS",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 4253877.0,
                                "volume": 9.35436,
                                "converted_last": {
                                    "btc": 0.07058896,
                                    "eth": 1.429146,
                                    "usd": 4570.44
                                },
                                "converted_volume": {
                                    "btc": 0.66080078,
                                    "eth": 13.378591,
                                    "usd": 42785
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.473848,
                                "timestamp": "2024-08-01T12:21:14+00:00",
                                "last_traded_at": "2024-08-01T12:21:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:05+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_ARS?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "DOT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001674,
                                "volume": 7193.41,
                                "converted_last": {
                                    "btc": 8.27e-05,
                                    "eth": 0.00167426,
                                    "usd": 5.35
                                },
                                "converted_volume": {
                                    "btc": 0.5920932,
                                    "eth": 11.987535,
                                    "usd": 38336
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.119403,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/DOT_ETH?ref=37754157",
                                "coin_id": "polkadot",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ICP",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.002773,
                                "volume": 4134.683,
                                "converted_last": {
                                    "btc": 0.00013699,
                                    "eth": 0.00277405,
                                    "usd": 8.87
                                },
                                "converted_volume": {
                                    "btc": 0.56904702,
                                    "eth": 11.523536,
                                    "usd": 36829
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.217865,
                                "timestamp": "2024-08-01T12:27:04+00:00",
                                "last_traded_at": "2024-08-01T12:27:04+00:00",
                                "last_fetch_at": "2024-08-01T12:27:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ICP_ETH?ref=37754157",
                                "coin_id": "internet-computer",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "VET",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 8.27e-06,
                                "volume": 1339814.0,
                                "converted_last": {
                                    "btc": 4.08538e-07,
                                    "eth": 8.27e-06,
                                    "usd": 0.0264517
                                },
                                "converted_volume": {
                                    "btc": 0.54342005,
                                    "eth": 11.002097,
                                    "usd": 35185
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.362319,
                                "timestamp": "2024-08-01T12:26:08+00:00",
                                "last_traded_at": "2024-08-01T12:26:08+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/VET_ETH?ref=37754157",
                                "coin_id": "vechain",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "APT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.002005,
                                "volume": 5304.02,
                                "converted_last": {
                                    "btc": 9.905e-05,
                                    "eth": 0.00200531,
                                    "usd": 6.41
                                },
                                "converted_volume": {
                                    "btc": 0.52191965,
                                    "eth": 10.5668,
                                    "usd": 33793
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.149626,
                                "timestamp": "2024-08-01T12:16:03+00:00",
                                "last_traded_at": "2024-08-01T12:16:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/APT_ETH?ref=37754157",
                                "coin_id": "aptos",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "GRT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5.592e-05,
                                "volume": 187404.0,
                                "converted_last": {
                                    "btc": 2.76e-06,
                                    "eth": 5.594e-05,
                                    "usd": 0.178785
                                },
                                "converted_volume": {
                                    "btc": 0.51697299,
                                    "eth": 10.469006,
                                    "usd": 33458
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.231853,
                                "timestamp": "2024-08-01T12:15:06+00:00",
                                "last_traded_at": "2024-08-01T12:15:06+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/GRT_ETH?ref=37754157",
                                "coin_id": "the-graph",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "DENT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2.7e-07,
                                "volume": 37991551.0,
                                "converted_last": {
                                    "btc": 1.3338e-08,
                                    "eth": 2.70102e-07,
                                    "usd": 0.00086323
                                },
                                "converted_volume": {
                                    "btc": 0.50576906,
                                    "eth": 10.24212,
                                    "usd": 32733
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 3.571429,
                                "timestamp": "2024-08-01T12:12:03+00:00",
                                "last_traded_at": "2024-08-01T12:12:03+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/DENT_ETH?ref=37754157",
                                "coin_id": "dent",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "XVG",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.23e-06,
                                "volume": 8203344.0,
                                "converted_last": {
                                    "btc": 6.0762e-08,
                                    "eth": 1.23e-06,
                                    "usd": 0.0039325
                                },
                                "converted_volume": {
                                    "btc": 0.49723176,
                                    "eth": 10.069235,
                                    "usd": 32181
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.813008,
                                "timestamp": "2024-08-01T12:23:12+00:00",
                                "last_traded_at": "2024-08-01T12:23:12+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/XVG_ETH?ref=37754157",
                                "coin_id": "verge",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "AXS",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001782,
                                "volume": 5634.449,
                                "converted_last": {
                                    "btc": 8.803e-05,
                                    "eth": 0.00178227,
                                    "usd": 5.7
                                },
                                "converted_volume": {
                                    "btc": 0.49072762,
                                    "eth": 9.935285,
                                    "usd": 31773
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.056085,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/AXS_ETH?ref=37754157",
                                "coin_id": "axie-infinity",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "SC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.54e-06,
                                "volume": 5530147.0,
                                "converted_last": {
                                    "btc": 7.6045e-08,
                                    "eth": 1.54e-06,
                                    "usd": 0.00492129
                                },
                                "converted_volume": {
                                    "btc": 0.42524571,
                                    "eth": 8.613754,
                                    "usd": 27520
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.649351,
                                "timestamp": "2024-08-01T11:20:25+00:00",
                                "last_traded_at": "2024-08-01T11:20:25+00:00",
                                "last_fetch_at": "2024-08-01T12:26:08+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SC_ETH?ref=37754157",
                                "coin_id": "siacoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ZEC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.01017,
                                "volume": 852.422,
                                "converted_last": {
                                    "btc": 0.0005024,
                                    "eth": 0.01017156,
                                    "usd": 32.53
                                },
                                "converted_volume": {
                                    "btc": 0.42391944,
                                    "eth": 8.582685,
                                    "usd": 27448
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.390625,
                                "timestamp": "2024-08-01T12:04:03+00:00",
                                "last_traded_at": "2024-08-01T12:04:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ZEC_ETH?ref=37754157",
                                "coin_id": "zcash",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "HOT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5e-07,
                                "volume": 16495710.0,
                                "converted_last": {
                                    "btc": 2.469e-08,
                                    "eth": 5.00119e-07,
                                    "usd": 0.00159782
                                },
                                "converted_volume": {
                                    "btc": 0.407284,
                                    "eth": 8.249922,
                                    "usd": 26358
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 2.0,
                                "timestamp": "2024-08-01T11:05:12+00:00",
                                "last_traded_at": "2024-08-01T11:05:12+00:00",
                                "last_fetch_at": "2024-08-01T12:26:08+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/HOT_ETH?ref=37754157",
                                "coin_id": "holotoken",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "SSV",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.009258,
                                "volume": 866.53,
                                "converted_last": {
                                    "btc": 0.00045651,
                                    "eth": 0.00925492,
                                    "usd": 29.53
                                },
                                "converted_volume": {
                                    "btc": 0.40089983,
                                    "eth": 8.127485,
                                    "usd": 25930
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.064788,
                                "timestamp": "2024-08-01T12:07:02+00:00",
                                "last_traded_at": "2024-08-01T12:07:02+00:00",
                                "last_fetch_at": "2024-08-01T12:09:12+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SSV_ETH?ref=37754157",
                                "coin_id": "ssv-network",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "DASH",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.00814,
                                "volume": 955.668,
                                "converted_last": {
                                    "btc": 0.00040195,
                                    "eth": 0.00813643,
                                    "usd": 26.03
                                },
                                "converted_volume": {
                                    "btc": 0.39126052,
                                    "eth": 7.91999,
                                    "usd": 25339
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.2457,
                                "timestamp": "2024-08-01T11:55:08+00:00",
                                "last_traded_at": "2024-08-01T11:55:08+00:00",
                                "last_fetch_at": "2024-08-01T12:17:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/DASH_ETH?ref=37754157",
                                "coin_id": "dash",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ELF",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001145,
                                "volume": 62280.0,
                                "converted_last": {
                                    "btc": 5.65e-06,
                                    "eth": 0.00011446,
                                    "usd": 0.365176
                                },
                                "converted_volume": {
                                    "btc": 0.35506188,
                                    "eth": 7.198208,
                                    "usd": 22965
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.173913,
                                "timestamp": "2024-08-01T11:23:05+00:00",
                                "last_traded_at": "2024-08-01T11:23:05+00:00",
                                "last_fetch_at": "2024-08-01T12:09:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ELF_ETH?ref=37754157",
                                "coin_id": "aelf",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ATOM",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001813,
                                "volume": 3911.275,
                                "converted_last": {
                                    "btc": 8.94e-05,
                                    "eth": 0.00181238,
                                    "usd": 5.78
                                },
                                "converted_volume": {
                                    "btc": 0.34877606,
                                    "eth": 7.070709,
                                    "usd": 22558
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.055006,
                                "timestamp": "2024-08-01T12:10:07+00:00",
                                "last_traded_at": "2024-08-01T12:10:07+00:00",
                                "last_fetch_at": "2024-08-01T12:10:07+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ATOM_ETH?ref=37754157",
                                "coin_id": "cosmos",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "STEEM",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 5.84e-05,
                                "volume": 121202.0,
                                "converted_last": {
                                    "btc": 2.88e-06,
                                    "eth": 5.841e-05,
                                    "usd": 0.186793
                                },
                                "converted_volume": {
                                    "btc": 0.34817504,
                                    "eth": 7.049162,
                                    "usd": 22543
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.171233,
                                "timestamp": "2024-08-01T12:27:03+00:00",
                                "last_traded_at": "2024-08-01T12:27:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/STEEM_ETH?ref=37754157",
                                "coin_id": "steem",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "GALA",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 6.84e-06,
                                "volume": 928314.0,
                                "converted_last": {
                                    "btc": 3.37896e-07,
                                    "eth": 6.84e-06,
                                    "usd": 0.02187783
                                },
                                "converted_volume": {
                                    "btc": 0.31188158,
                                    "eth": 6.314363,
                                    "usd": 20193
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.289436,
                                "timestamp": "2024-08-01T12:02:09+00:00",
                                "last_traded_at": "2024-08-01T12:02:09+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/GALA_ETH?ref=37754157",
                                "coin_id": "gala",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "RLC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0005029,
                                "volume": 9951.0,
                                "converted_last": {
                                    "btc": 2.484e-05,
                                    "eth": 0.00050298,
                                    "usd": 1.61
                                },
                                "converted_volume": {
                                    "btc": 0.24924919,
                                    "eth": 5.046306,
                                    "usd": 16138.19
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.474215,
                                "timestamp": "2024-08-01T12:26:08+00:00",
                                "last_traded_at": "2024-08-01T12:26:08+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/RLC_ETH?ref=37754157",
                                "coin_id": "iexec-rlc",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "CYBER",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001199,
                                "volume": 3557.87,
                                "converted_last": {
                                    "btc": 5.927e-05,
                                    "eth": 0.00119876,
                                    "usd": 3.84
                                },
                                "converted_volume": {
                                    "btc": 0.21343184,
                                    "eth": 4.316997,
                                    "usd": 13835.31
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.249377,
                                "timestamp": "2024-08-01T11:28:14+00:00",
                                "last_traded_at": "2024-08-01T11:28:14+00:00",
                                "last_fetch_at": "2024-08-01T12:20:10+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/CYBER_ETH?ref=37754157",
                                "coin_id": "cyberconnect",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "THETA",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0004267,
                                "volume": 9883.1,
                                "converted_last": {
                                    "btc": 2.107e-05,
                                    "eth": 0.00042659,
                                    "usd": 1.36
                                },
                                "converted_volume": {
                                    "btc": 0.20779289,
                                    "eth": 4.206976,
                                    "usd": 13415.01
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.258034,
                                "timestamp": "2024-08-01T10:08:05+00:00",
                                "last_traded_at": "2024-08-01T10:08:05+00:00",
                                "last_fetch_at": "2024-08-01T11:53:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/THETA_ETH?ref=37754157",
                                "coin_id": "theta-token",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "CHR",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 6.58e-05,
                                "volume": 63474.1,
                                "converted_last": {
                                    "btc": 3.25e-06,
                                    "eth": 6.581e-05,
                                    "usd": 0.210462
                                },
                                "converted_volume": {
                                    "btc": 0.20436846,
                                    "eth": 4.13765,
                                    "usd": 13232.29
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.151976,
                                "timestamp": "2024-08-01T12:28:03+00:00",
                                "last_traded_at": "2024-08-01T12:28:03+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/CHR_ETH?ref=37754157",
                                "coin_id": "chromaway",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.00685,
                                "volume": 601.61,
                                "converted_last": {
                                    "btc": 0.00033825,
                                    "eth": 0.00684464,
                                    "usd": 21.91
                                },
                                "converted_volume": {
                                    "btc": 0.20168686,
                                    "eth": 4.081188,
                                    "usd": 13061.7
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.292398,
                                "timestamp": "2024-08-01T11:57:06+00:00",
                                "last_traded_at": "2024-08-01T11:57:06+00:00",
                                "last_fetch_at": "2024-08-01T12:18:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETC_ETH?ref=37754157",
                                "coin_id": "ethereum-classic",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "XLM",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3.121e-05,
                                "volume": 123144.0,
                                "converted_last": {
                                    "btc": 1.54e-06,
                                    "eth": 3.121e-05,
                                    "usd": 0.099826
                                },
                                "converted_volume": {
                                    "btc": 0.19044498,
                                    "eth": 3.855754,
                                    "usd": 12330.78
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.192864,
                                "timestamp": "2024-08-01T12:24:06+00:00",
                                "last_traded_at": "2024-08-01T12:24:06+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/XLM_ETH?ref=37754157",
                                "coin_id": "stellar",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "APE",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0002279,
                                "volume": 13215.885,
                                "converted_last": {
                                    "btc": 1.126e-05,
                                    "eth": 0.00022794,
                                    "usd": 0.728941
                                },
                                "converted_volume": {
                                    "btc": 0.1510807,
                                    "eth": 3.058784,
                                    "usd": 9782.05
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.565956,
                                "timestamp": "2024-08-01T11:33:10+00:00",
                                "last_traded_at": "2024-08-01T11:33:10+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/APE_ETH?ref=37754157",
                                "coin_id": "apecoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "IOTX",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.264e-05,
                                "volume": 219788.0,
                                "converted_last": {
                                    "btc": 6.24416e-07,
                                    "eth": 1.264e-05,
                                    "usd": 0.04041207
                                },
                                "converted_volume": {
                                    "btc": 0.13677737,
                                    "eth": 2.769822,
                                    "usd": 8852.2
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.237342,
                                "timestamp": "2024-08-01T12:21:11+00:00",
                                "last_traded_at": "2024-08-01T12:21:11+00:00",
                                "last_fetch_at": "2024-08-01T12:27:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/IOTX_ETH?ref=37754157",
                                "coin_id": "iotex",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "LRC",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 4.471e-05,
                                "volume": 46232.0,
                                "converted_last": {
                                    "btc": 2.21e-06,
                                    "eth": 4.469e-05,
                                    "usd": 0.143104
                                },
                                "converted_volume": {
                                    "btc": 0.10186365,
                                    "eth": 2.061513,
                                    "usd": 6601.25
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.133541,
                                "timestamp": "2024-08-01T12:12:03+00:00",
                                "last_traded_at": "2024-08-01T12:12:03+00:00",
                                "last_fetch_at": "2024-08-01T12:22:09+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/LRC_ETH?ref=37754157",
                                "coin_id": "loopring",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "FIL",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.001336,
                                "volume": 1383.61,
                                "converted_last": {
                                    "btc": 6.6e-05,
                                    "eth": 0.00133621,
                                    "usd": 4.27
                                },
                                "converted_volume": {
                                    "btc": 0.08967395,
                                    "eth": 1.815541,
                                    "usd": 5806.14
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.074738,
                                "timestamp": "2024-08-01T12:11:07+00:00",
                                "last_traded_at": "2024-08-01T12:11:07+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/FIL_ETH?ref=37754157",
                                "coin_id": "filecoin",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "LSK",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0002987,
                                "volume": 4878.9,
                                "converted_last": {
                                    "btc": 1.476e-05,
                                    "eth": 0.00029875,
                                    "usd": 0.955396
                                },
                                "converted_volume": {
                                    "btc": 0.07186044,
                                    "eth": 1.454888,
                                    "usd": 4652.76
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.400936,
                                "timestamp": "2024-08-01T12:24:06+00:00",
                                "last_traded_at": "2024-08-01T12:24:06+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/LSK_ETH?ref=37754157",
                                "coin_id": "lisk",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "QTUM",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.00079,
                                "volume": 1357.7,
                                "converted_last": {
                                    "btc": 3.895e-05,
                                    "eth": 0.00078973,
                                    "usd": 2.52
                                },
                                "converted_volume": {
                                    "btc": 0.05326509,
                                    "eth": 1.079843,
                                    "usd": 3446.18
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.37831,
                                "timestamp": "2024-08-01T12:09:07+00:00",
                                "last_traded_at": "2024-08-01T12:09:07+00:00",
                                "last_fetch_at": "2024-08-01T12:12:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/QTUM_ETH?ref=37754157",
                                "coin_id": "qtum",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "IOTA",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 4.68e-05,
                                "volume": 22369.0,
                                "converted_last": {
                                    "btc": 2.31e-06,
                                    "eth": 4.681e-05,
                                    "usd": 0.14969
                                },
                                "converted_volume": {
                                    "btc": 0.05217052,
                                    "eth": 1.056246,
                                    "usd": 3377.9
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.634249,
                                "timestamp": "2024-08-01T11:54:04+00:00",
                                "last_traded_at": "2024-08-01T11:54:04+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/IOTA_ETH?ref=37754157",
                                "coin_id": "iota",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "BNT",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 0.0001798,
                                "volume": 3896.1,
                                "converted_last": {
                                    "btc": 8.88e-06,
                                    "eth": 0.00017983,
                                    "usd": 0.575093
                                },
                                "converted_volume": {
                                    "btc": 0.0342426,
                                    "eth": 0.69327674,
                                    "usd": 2217.11
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 0.221976,
                                "timestamp": "2024-08-01T12:26:09+00:00",
                                "last_traded_at": "2024-08-01T12:26:09+00:00",
                                "last_fetch_at": "2024-08-01T12:28:02+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/BNT_ETH?ref=37754157",
                                "coin_id": "bancor",
                                "target_coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "UAH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 136660.0,
                                "volume": 0.5338,
                                "converted_last": {
                                    "btc": 0.0514814,
                                    "eth": 1.043816,
                                    "usd": 3330.75
                                },
                                "converted_volume": {
                                    "btc": 0.02787251,
                                    "eth": 0.56513183,
                                    "usd": 1803.3
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.398039,
                                "timestamp": "2024-08-01T12:08:10+00:00",
                                "last_traded_at": "2024-08-01T12:08:10+00:00",
                                "last_fetch_at": "2024-08-01T12:11:06+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_UAH?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "BRL",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 18259.98,
                                "volume": 1369.7055,
                                "converted_last": {
                                    "btc": 0.04977214,
                                    "eth": 1.008182,
                                    "usd": 3221.02
                                },
                                "converted_volume": {
                                    "btc": 68.902,
                                    "eth": 1396,
                                    "usd": 4459007
                                },
                                "bid_ask_spread_percentage": 0.045287,
                                "timestamp": "2024-08-01T12:26:11+00:00",
                                "last_traded_at": "2024-08-01T12:26:11+00:00",
                                "last_fetch_at": "2024-08-01T12:26:11+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_BRL?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "JPY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 484042.0,
                                "volume": 807.02863,
                                "converted_last": {
                                    "btc": 0.04963153,
                                    "eth": 1.004841,
                                    "usd": 3213.5
                                },
                                "converted_volume": {
                                    "btc": 39.899271,
                                    "eth": 807.802,
                                    "usd": 2583367
                                },
                                "bid_ask_spread_percentage": 0.051275,
                                "timestamp": "2024-08-01T12:28:05+00:00",
                                "last_traded_at": "2024-08-01T12:28:05+00:00",
                                "last_fetch_at": "2024-08-01T12:28:05+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_JPY?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "PLN",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 12802.0,
                                "volume": 93.5881,
                                "converted_last": {
                                    "btc": 0.04969119,
                                    "eth": 1.006049,
                                    "usd": 3217.37
                                },
                                "converted_volume": {
                                    "btc": 4.683416,
                                    "eth": 94.821,
                                    "usd": 303238
                                },
                                "bid_ask_spread_percentage": 0.015624,
                                "timestamp": "2024-08-01T12:26:14+00:00",
                                "last_traded_at": "2024-08-01T12:26:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:03+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_PLN?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "ETH",
                                "target": "ZAR",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 59104.0,
                                "volume": 33.1133,
                                "converted_last": {
                                    "btc": 0.05027501,
                                    "eth": 1.019231,
                                    "usd": 3251.73
                                },
                                "converted_volume": {
                                    "btc": 1.689578,
                                    "eth": 34.253001,
                                    "usd": 109280
                                },
                                "bid_ask_spread_percentage": 0.092924,
                                "timestamp": "2024-08-01T12:03:13+00:00",
                                "last_traded_at": "2024-08-01T12:03:13+00:00",
                                "last_fetch_at": "2024-08-01T12:09:13+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/ETH_ZAR?ref=37754157",
                                "coin_id": "ethereum"
                            },
                            {
                                "base": "SLP",
                                "target": "ETH",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 8.1e-07,
                                "volume": 536232.0,
                                "converted_last": {
                                    "btc": 3.9965e-08,
                                    "eth": 8.09997e-07,
                                    "usd": 0.00257657
                                },
                                "converted_volume": {
                                    "btc": 0.02154819,
                                    "eth": 0.43672697,
                                    "usd": 1389.21
                                },
                                "trust_score": "yellow",
                                "bid_ask_spread_percentage": 1.219512,
                                "timestamp": "2024-08-01T07:58:12+00:00",
                                "last_traded_at": "2024-08-01T07:58:12+00:00",
                                "last_fetch_at": "2024-08-01T09:50:04+00:00",
                                "is_anomaly": true,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/SLP_ETH?ref=37754157",
                                "coin_id": "smooth-love-potion",
                                "target_coin_id": "ethereum"
                            }
                        ],
                        "categories": [
                            "Smart Contract Platform",
                            "Layer 1 (L1)",
                            "Ethereum Ecosystem",
                            "FTX Holdings",
                            "Multicoin Capital Portfolio",
                            "Proof of Stake (PoS)",
                            "Alameda Research Portfolio",
                            "Andreessen Horowitz (a16z) Portfolio",
                            "GMCI Layer 1 Index",
                            "GMCI 30 Index",
                            "Delphi Digital Portfolio",
                            "Galaxy Digital Portfolio"
                        ]
                    },
                    {
                        "id": "waffles",
                        "symbol": "waffles",
                        "name": "Waffles",
                        "current_price": 0.02098144,
                        "market_cap": 20943041,
                        "fully_diluted_valuation": 20943041,
                        "price_change_percentage_24h": -5.82008,
                        "circulating_supply": 998169822.312236,
                        "total_supply": 998169822.312236,
                        "max_supply": 1000000000.0,
                        "circulating_supply_percentage": 100.0,
                        "price_change_percentage_7d": -28.42302,
                        "current_sentiment_positive": 78.57,
                        "trade_pair": "WAFFLESUSDT",
                        "chain": "solana",
                        "contract": "8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb",
                        "description": "Waffles is the Jeremie Davinci's cat and you better buy 1$ worth of $WAFFLES before it's too late",
                        "links": {
                            "homepage": [
                                "https://wafflesonsolana.xyz/"
                            ],
                            "blockchain_site": [
                                "https://explorer.solana.com/address/8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb",
                                "https://solscan.io/account/8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb",
                                "https://solscan.io/token/8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb"
                            ],
                            "official_forum_url": [
                                "https://www.instagram.com/wafflesonsolana/",
                                "https://www.tiktok.com/@wafflesonsolana?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"
                            ],
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {}
                        },
                        "tickers": [
                            {
                                "base": "WAFFLES",
                                "target": "USDT",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.02095,
                                "volume": 6280253.82,
                                "converted_last": {
                                    "btc": 3.23539e-07,
                                    "eth": 6.55e-06,
                                    "usd": 0.02093795
                                },
                                "converted_volume": {
                                    "btc": 2.031907,
                                    "eth": 41.158202,
                                    "usd": 131496
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.14313,
                                "timestamp": "2024-08-01T12:26:26+00:00",
                                "last_traded_at": "2024-08-01T12:26:26+00:00",
                                "last_fetch_at": "2024-08-01T12:26:26+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/WAFFLES_USDT",
                                "coin_id": "waffles",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "WAFFLES",
                                "target": "USDT",
                                "market": {
                                    "name": "BingX",
                                    "identifier": "bingx",
                                    "has_trading_incentive": false
                                },
                                "last": 0.02084,
                                "volume": 3590782.34,
                                "converted_last": {
                                    "btc": 3.21674e-07,
                                    "eth": 6.51e-06,
                                    "usd": 0.02082752
                                },
                                "converted_volume": {
                                    "btc": 1.156051,
                                    "eth": 23.405449,
                                    "usd": 74851
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.287356,
                                "timestamp": "2024-08-01T12:28:22+00:00",
                                "last_traded_at": "2024-08-01T12:28:22+00:00",
                                "last_fetch_at": "2024-08-01T12:28:22+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://bingx.com/en-us/spot/WAFFLESUSDT",
                                "coin_id": "waffles",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "WAFFLES",
                                "target": "USDT",
                                "market": {
                                    "name": "BitMart",
                                    "identifier": "bitmart",
                                    "has_trading_incentive": false
                                },
                                "last": 0.02084,
                                "volume": 8477832.12,
                                "converted_last": {
                                    "btc": 3.21824e-07,
                                    "eth": 6.52e-06,
                                    "usd": 0.02082839
                                },
                                "converted_volume": {
                                    "btc": 2.72837,
                                    "eth": 55.251,
                                    "usd": 176580
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.430416,
                                "timestamp": "2024-08-01T12:25:56+00:00",
                                "last_traded_at": "2024-08-01T12:25:56+00:00",
                                "last_fetch_at": "2024-08-01T12:27:57+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bitmart.com/trade/en?symbol=WAFFLES_USDT",
                                "coin_id": "waffles",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Solana Ecosystem",
                            "Meme",
                            "Solana Meme",
                            "Pump.fun Ecosystem"
                        ]
                    },
                    {
                        "id": "kaspa",
                        "symbol": "kas",
                        "name": "Kaspa",
                        "current_price": 0.206155,
                        "market_cap": 5008267909,
                        "fully_diluted_valuation": 5008508858,
                        "price_change_percentage_24h": 2.26244,
                        "circulating_supply": 24338232945.0583,
                        "total_supply": 24339403865.9898,
                        "max_supply": 28704026601.0,
                        "circulating_supply_percentage": 99.99518919634208,
                        "price_change_percentage_7d": 17.30307,
                        "current_sentiment_positive": 85.61,
                        "trade_pair": "KASUSDT",
                        "description": "Kaspa is a proof-of-work cryptocurrency which implements the GHOSTDAG protocol. Unlike traditional blockchains, GHOSTDAG does not orphan blocks created in parallel, rather allows them to coexist and orders them in consensus. Whereby our blockchain is actually a blockDAG; you can see GHOSTDAG in action in a real time blockDAG visualizer). This generalization of Nakamoto consensus allows for secure operation while maintaining very high block rates (currently one block per second, aiming for 10/sec, dreaming of 100/sec) and minuscule confirmation times dominated by internet latency (cf. chapter 6 of the the paper for some initial benchmarks). The Kaspa implementation includes a lot of cool features and subprotocols including Reachability to query the DAG's topology, Block data pruning (with near-future plans for block header pruning), SPV proofs, and later subnetwork support which will make future implementation of layer 2 solutions much easier.",
                        "links": {
                            "homepage": [
                                "https://kaspa.org/"
                            ],
                            "whitepaper": "https://eprint.iacr.org/2018/104.pdf",
                            "blockchain_site": [
                                "https://kas.fyi/",
                                "https://explorer.kaspa.org/"
                            ],
                            "official_forum_url": [
                                "https://www.linkedin.com/company/kaspa-currency/",
                                "https://www.instagram.com/kaspa_currency/"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/kS3SK5F36R",
                                "https://medium.com/kaspa-currency",
                                "https://www.youtube.com/channel/UCsnbLKm_lpCUj63_HPW17og"
                            ],
                            "twitter_screen_name": "KaspaCurrency",
                            "facebook_username": "KaspaCurrency",
                            "telegram_channel_identifier": "kaspaenglish",
                            "subreddit_url": "https://www.reddit.com/r/Kaspa",
                            "repos_url": {
                                "github": [
                                    "https://github.com/kaspanet/kaspad"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "KAS",
                                "target": "USDT",
                                "market": {
                                    "name": "Bybit",
                                    "identifier": "bybit_spot",
                                    "has_trading_incentive": false
                                },
                                "last": 0.20649,
                                "volume": 97348638.62,
                                "converted_last": {
                                    "btc": 3.19e-06,
                                    "eth": 6.453e-05,
                                    "usd": 0.206366
                                },
                                "converted_volume": {
                                    "btc": 307.55,
                                    "eth": 6227,
                                    "usd": 19913013
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.014532,
                                "timestamp": "2024-08-01T12:28:16+00:00",
                                "last_traded_at": "2024-08-01T12:28:16+00:00",
                                "last_fetch_at": "2024-08-01T12:28:16+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bybit.com/trade/spot/KAS/USDT",
                                "coin_id": "kaspa",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "KAS",
                                "target": "USDT",
                                "market": {
                                    "name": "KuCoin",
                                    "identifier": "kucoin",
                                    "has_trading_incentive": false
                                },
                                "last": 0.2064,
                                "volume": 63648269.27048827,
                                "converted_last": {
                                    "btc": 3.19e-06,
                                    "eth": 6.45e-05,
                                    "usd": 0.206276
                                },
                                "converted_volume": {
                                    "btc": 202.775,
                                    "eth": 4105,
                                    "usd": 13129138
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.014844,
                                "timestamp": "2024-08-01T12:28:40+00:00",
                                "last_traded_at": "2024-08-01T12:28:40+00:00",
                                "last_fetch_at": "2024-08-01T12:28:40+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.kucoin.com/trade/KAS-USDT",
                                "coin_id": "kaspa",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "KAS",
                                "target": "BTC",
                                "market": {
                                    "name": "KuCoin",
                                    "identifier": "kucoin",
                                    "has_trading_incentive": false
                                },
                                "last": 3.169e-06,
                                "volume": 594949.8909,
                                "converted_last": {
                                    "btc": 3.17e-06,
                                    "eth": 6.416e-05,
                                    "usd": 0.205184
                                },
                                "converted_volume": {
                                    "btc": 1.885396,
                                    "eth": 38.171784,
                                    "usd": 122074
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.188206,
                                "timestamp": "2024-08-01T12:24:10+00:00",
                                "last_traded_at": "2024-08-01T12:24:10+00:00",
                                "last_fetch_at": "2024-08-01T12:28:40+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.kucoin.com/trade/KAS-BTC",
                                "coin_id": "kaspa",
                                "target_coin_id": "bitcoin"
                            }
                        ],
                        "categories": [
                            "Layer 1 (L1)",
                            "Proof of Work (PoW)"
                        ]
                    },
                    {
                        "id": "aethir",
                        "symbol": "ath",
                        "name": "Aethir",
                        "current_price": 0.07337,
                        "market_cap": 297286727,
                        "fully_diluted_valuation": 3077871381,
                        "price_change_percentage_24h": 11.12764,
                        "circulating_supply": 4056713543.0,
                        "total_supply": 42000000000.0,
                        "max_supply": 42000000000.0,
                        "circulating_supply_percentage": 9.65884176904762,
                        "price_change_percentage_7d": 0.21539,
                        "current_sentiment_positive": 90.48,
                        "trade_pair": "ATHUSDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b",
                        "description": "Aethir is the only Enterprise-grade AI-focused GPU-as-a-service provider in the market. It\u2019s a decentralized cloud computing infrastructure allows GPU providers (containers) to meet Enterprise clients who need powerful H100\u2019s chips for professional AI/ML tasks. \r\n\r\nAethir also support cloud gaming clients with their virtual computing phones and GPU's with contracts with the world\u2019s largest telecommunication company. Everything within Aethir ecosystem will be decentralized and community-owned.",
                        "links": {
                            "homepage": [
                                "https://www.aethir.com/"
                            ],
                            "whitepaper": "https://aethir.gitbook.io/aethir/ljvx8d8ee4ElPliP31K1/",
                            "blockchain_site": [
                                "https://etherscan.io/address/0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b",
                                "https://etherscan.io/token/0xbe0Ed4138121EcFC5c0E56B40517da27E6c5226B",
                                "https://ethplorer.io/address/0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b",
                                "https://arbiscan.io/token/0xc87b37a581ec3257b734886d9d3a581f5a9d056c"
                            ],
                            "official_forum_url": [
                                "https://www.linkedin.com/company/aethir-limited/",
                                "https://www.youtube.com/@AethirCloud"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/aethircloud"
                            ],
                            "twitter_screen_name": "AethirCloud",
                            "telegram_channel_identifier": "aethir_cloud",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {}
                        },
                        "tickers": [
                            {
                                "base": "ATH",
                                "target": "USDT",
                                "market": {
                                    "name": "Bybit",
                                    "identifier": "bybit_spot",
                                    "has_trading_incentive": false
                                },
                                "last": 0.073455,
                                "volume": 105276189.14,
                                "converted_last": {
                                    "btc": 1.13e-06,
                                    "eth": 2.296e-05,
                                    "usd": 0.073411
                                },
                                "converted_volume": {
                                    "btc": 114.617,
                                    "eth": 2321,
                                    "usd": 7421122
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.084408,
                                "timestamp": "2024-08-01T12:28:18+00:00",
                                "last_traded_at": "2024-08-01T12:28:18+00:00",
                                "last_fetch_at": "2024-08-01T12:28:18+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bybit.com/trade/spot/ATH/USDT",
                                "coin_id": "aethir",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "ATH",
                                "target": "USDT",
                                "market": {
                                    "name": "HTX",
                                    "identifier": "huobi",
                                    "has_trading_incentive": false
                                },
                                "last": 0.07342,
                                "volume": 144327781.61311764,
                                "converted_last": {
                                    "btc": 1.13e-06,
                                    "eth": 2.294e-05,
                                    "usd": 0.073376
                                },
                                "converted_volume": {
                                    "btc": 157.128,
                                    "eth": 3181,
                                    "usd": 10173581
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.163421,
                                "timestamp": "2024-08-01T12:28:35+00:00",
                                "last_traded_at": "2024-08-01T12:28:35+00:00",
                                "last_fetch_at": "2024-08-01T12:28:35+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.huobi.com/en-us/exchange/ath_usdt",
                                "coin_id": "aethir",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "ATH",
                                "target": "USDT",
                                "market": {
                                    "name": "OKX",
                                    "identifier": "okex",
                                    "has_trading_incentive": false
                                },
                                "last": 0.07341,
                                "volume": 123918125.5,
                                "converted_last": {
                                    "btc": 1.13e-06,
                                    "eth": 2.294e-05,
                                    "usd": 0.073366
                                },
                                "converted_volume": {
                                    "btc": 134.767,
                                    "eth": 2729,
                                    "usd": 8725820
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.081688,
                                "timestamp": "2024-08-01T12:28:17+00:00",
                                "last_traded_at": "2024-08-01T12:28:17+00:00",
                                "last_fetch_at": "2024-08-01T12:28:17+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.okx.com/trade-spot/ath-usdt",
                                "coin_id": "aethir",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Arbitrum Ecosystem",
                            "Ethereum Ecosystem",
                            "DePIN",
                            "Animoca Brands Portfolio"
                        ]
                    },
                    {
                        "id": "dogwifcoin",
                        "symbol": "wif",
                        "name": "dogwifhat",
                        "current_price": 2.02,
                        "market_cap": 2011375201,
                        "fully_diluted_valuation": 2011375201,
                        "price_change_percentage_24h": -11.99183,
                        "circulating_supply": 998926392.0,
                        "total_supply": 998926392.0,
                        "max_supply": 998926392.0,
                        "circulating_supply_percentage": 100.0,
                        "price_change_percentage_7d": -19.01885,
                        "current_sentiment_positive": 57.58,
                        "trade_pair": "WIFUSDT",
                        "chain": "solana",
                        "contract": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                        "description": "Literally a dog wif a hat, dogwifhat (WIF) is a meme coin that's part of the ever-growing ecosystem of digital currencies on the Solana blockchain. This token brings a lighthearted twist to cryptocurrency, featuring a playful dog with a hat as its mascot, symbolising a more whimsical approach to the often serious domain of digital finance.",
                        "links": {
                            "homepage": [
                                "https://dogwifcoin.org"
                            ],
                            "blockchain_site": [
                                "https://explorer.solana.com/address/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                                "https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"
                            ],
                            "twitter_screen_name": "dogwifcoin",
                            "telegram_channel_identifier": "dogwifcoin",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {}
                        },
                        "tickers": [
                            {
                                "base": "WIF",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2.018,
                                "volume": 81654116.55,
                                "converted_last": {
                                    "btc": 3.116e-05,
                                    "eth": 0.00063093,
                                    "usd": 2.02
                                },
                                "converted_volume": {
                                    "btc": 2665,
                                    "eth": 53949,
                                    "usd": 172530890
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.049603,
                                "timestamp": "2024-08-01T12:26:15+00:00",
                                "last_traded_at": "2024-08-01T12:26:15+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_USDT?ref=37754157",
                                "coin_id": "dogwifcoin",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "WIF",
                                "target": "TRY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 67.02,
                                "volume": 2486510.97,
                                "converted_last": {
                                    "btc": 3.13e-05,
                                    "eth": 0.000634,
                                    "usd": 2.03
                                },
                                "converted_volume": {
                                    "btc": 81.462,
                                    "eth": 1650,
                                    "usd": 5271834
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.045517,
                                "timestamp": "2024-08-01T12:26:16+00:00",
                                "last_traded_at": "2024-08-01T12:26:16+00:00",
                                "last_fetch_at": "2024-08-01T12:26:16+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_TRY?ref=37754157",
                                "coin_id": "dogwifcoin"
                            },
                            {
                                "base": "WIF",
                                "target": "USDC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2.016,
                                "volume": 1779430.64,
                                "converted_last": {
                                    "btc": 3.112e-05,
                                    "eth": 0.00063047,
                                    "usd": 2.02
                                },
                                "converted_volume": {
                                    "btc": 57.871,
                                    "eth": 1172,
                                    "usd": 3747430
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.049529,
                                "timestamp": "2024-08-01T12:25:11+00:00",
                                "last_traded_at": "2024-08-01T12:25:11+00:00",
                                "last_fetch_at": "2024-08-01T12:25:11+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_USDC?ref=37754157",
                                "coin_id": "dogwifcoin",
                                "target_coin_id": "usd-coin"
                            },
                            {
                                "base": "WIF",
                                "target": "BTC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 3.116e-05,
                                "volume": 1605260.24,
                                "converted_last": {
                                    "btc": 3.116e-05,
                                    "eth": 0.00063087,
                                    "usd": 2.02
                                },
                                "converted_volume": {
                                    "btc": 51.5,
                                    "eth": 1043,
                                    "usd": 3334503
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.096432,
                                "timestamp": "2024-08-01T12:26:15+00:00",
                                "last_traded_at": "2024-08-01T12:26:15+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_BTC?ref=37754157",
                                "coin_id": "dogwifcoin",
                                "target_coin_id": "bitcoin"
                            },
                            {
                                "base": "WIF",
                                "target": "FDUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 2.018,
                                "volume": 766089.15,
                                "converted_last": {
                                    "btc": 3.114e-05,
                                    "eth": 0.00063043,
                                    "usd": 2.02
                                },
                                "converted_volume": {
                                    "btc": 24.663358,
                                    "eth": 499.335,
                                    "usd": 1596884
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.099157,
                                "timestamp": "2024-08-01T12:26:15+00:00",
                                "last_traded_at": "2024-08-01T12:26:15+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_FDUSD?ref=37754157",
                                "coin_id": "dogwifcoin",
                                "target_coin_id": "first-digital-usd"
                            },
                            {
                                "base": "WIF",
                                "target": "EUR",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.87,
                                "volume": 52109.42,
                                "converted_last": {
                                    "btc": 3.119e-05,
                                    "eth": 0.00063183,
                                    "usd": 2.02
                                },
                                "converted_volume": {
                                    "btc": 1.702371,
                                    "eth": 34.483137,
                                    "usd": 110170
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.26738,
                                "timestamp": "2024-08-01T12:23:19+00:00",
                                "last_traded_at": "2024-08-01T12:23:19+00:00",
                                "last_fetch_at": "2024-08-01T12:26:15+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_EUR?ref=37754157",
                                "coin_id": "dogwifcoin"
                            },
                            {
                                "base": "WIF",
                                "target": "BRL",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 11.5,
                                "volume": 36026.2,
                                "converted_last": {
                                    "btc": 3.133e-05,
                                    "eth": 0.00063432,
                                    "usd": 2.03
                                },
                                "converted_volume": {
                                    "btc": 1.178253,
                                    "eth": 23.854953,
                                    "usd": 76289
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.433276,
                                "timestamp": "2024-08-01T12:23:20+00:00",
                                "last_traded_at": "2024-08-01T12:23:20+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/WIF_BRL?ref=37754157",
                                "coin_id": "dogwifcoin"
                            }
                        ],
                        "categories": [
                            "Solana Ecosystem",
                            "Meme",
                            "Dog-Themed",
                            "Solana Meme",
                            "GMCI Meme Index"
                        ]
                    },
                    {
                        "id": "jupiter-exchange-solana",
                        "symbol": "jup",
                        "name": "Jupiter",
                        "current_price": 1.001,
                        "market_cap": 1353232450,
                        "fully_diluted_valuation": 10023944074,
                        "price_change_percentage_24h": -5.49464,
                        "circulating_supply": 1350000000.0,
                        "total_supply": 10000000000.0,
                        "max_supply": 10000000000.0,
                        "circulating_supply_percentage": 13.5,
                        "price_change_percentage_7d": 3.8795,
                        "current_sentiment_positive": 65.52,
                        "trade_pair": "JUPUSDT",
                        "chain": "solana",
                        "contract": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
                        "description": "Jupiter is a cryptocurrency exchange platform on the Solana blockchain, offering features such as token swapping, limit orders, dollar-cost averaging, and a bridge for asset transfers to Solana. It provides users with tools to find the best trading prices and includes a beta version for perpetual futures trading. Jupiter finds the best price route for your swap by aggregating all the major liquidity sources on Solana.",
                        "links": {
                            "homepage": [
                                "https://jup.ag/"
                            ],
                            "blockchain_site": [
                                "https://explorer.solana.com/address/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
                                "https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/jup",
                                "https://station.jup.ag/blog/"
                            ],
                            "twitter_screen_name": "JupiterExchange",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/jup-ag"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "JUP",
                                "target": "USDT",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.0033,
                                "volume": 27476608.2,
                                "converted_last": {
                                    "btc": 1.549e-05,
                                    "eth": 0.00031368,
                                    "usd": 1.003
                                },
                                "converted_volume": {
                                    "btc": 430.417,
                                    "eth": 8714,
                                    "usd": 27868305
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.019968,
                                "timestamp": "2024-08-01T12:26:14+00:00",
                                "last_traded_at": "2024-08-01T12:26:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/JUP_USDT?ref=37754157",
                                "coin_id": "jupiter-exchange-solana",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "JUP",
                                "target": "USDC",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.0022,
                                "volume": 504748.1,
                                "converted_last": {
                                    "btc": 1.548e-05,
                                    "eth": 0.00031364,
                                    "usd": 1.002
                                },
                                "converted_volume": {
                                    "btc": 7.877999,
                                    "eth": 159.576,
                                    "usd": 509828
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.020016,
                                "timestamp": "2024-08-01T12:26:14+00:00",
                                "last_traded_at": "2024-08-01T12:26:14+00:00",
                                "last_fetch_at": "2024-08-01T12:26:14+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/JUP_USDC?ref=37754157",
                                "coin_id": "jupiter-exchange-solana",
                                "target_coin_id": "usd-coin"
                            },
                            {
                                "base": "JUP",
                                "target": "TRY",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 33.32,
                                "volume": 325441.7,
                                "converted_last": {
                                    "btc": 1.555e-05,
                                    "eth": 0.00031489,
                                    "usd": 1.007
                                },
                                "converted_volume": {
                                    "btc": 5.127856,
                                    "eth": 103.819,
                                    "usd": 332014
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.060006,
                                "timestamp": "2024-08-01T12:26:14+00:00",
                                "last_traded_at": "2024-08-01T12:26:14+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/JUP_TRY?ref=37754157",
                                "coin_id": "jupiter-exchange-solana"
                            },
                            {
                                "base": "JUP",
                                "target": "FDUSD",
                                "market": {
                                    "name": "Binance",
                                    "identifier": "binance",
                                    "has_trading_incentive": false
                                },
                                "last": 1.0001,
                                "volume": 319074.8,
                                "converted_last": {
                                    "btc": 1.543e-05,
                                    "eth": 0.00031243,
                                    "usd": 0.99917
                                },
                                "converted_volume": {
                                    "btc": 4.989914,
                                    "eth": 101.026,
                                    "usd": 323083
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.049821,
                                "timestamp": "2024-08-01T12:23:20+00:00",
                                "last_traded_at": "2024-08-01T12:23:20+00:00",
                                "last_fetch_at": "2024-08-01T12:28:04+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.binance.com/en/trade/JUP_FDUSD?ref=37754157",
                                "coin_id": "jupiter-exchange-solana",
                                "target_coin_id": "first-digital-usd"
                            }
                        ],
                        "categories": [
                            "Decentralized Exchange (DEX)",
                            "Decentralized Finance (DeFi)",
                            "Solana Ecosystem",
                            "GMCI DeFi Index",
                            "Dex Aggregator"
                        ]
                    },
                    {
                        "id": "avail",
                        "symbol": "avail",
                        "name": "Avail",
                        "current_price": 0.15641,
                        "market_cap": 267821595,
                        "fully_diluted_valuation": 1567460887,
                        "price_change_percentage_24h": -7.82623,
                        "circulating_supply": 1708633353.0,
                        "total_supply": 10000000000.0,
                        "circulating_supply_percentage": 17.08633353,
                        "price_change_percentage_7d": -24.25347,
                        "current_sentiment_positive": 36.36,
                        "trade_pair": "AVAILUSDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0xeeb4d8400aeefafc1b2953e0094134a887c76bd8",
                        "description": "Avail is a Web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.",
                        "links": {
                            "homepage": [
                                "https://www.availproject.org/",
                                "https://docs.availproject.org/"
                            ],
                            "whitepaper": "https://github.com/availproject/data-availability/blob/master/reference%20document/Data%20Availability%20-%20Reference%20Document.pdf",
                            "blockchain_site": [
                                "https://etherscan.io/address/0xeeb4d8400aeefafc1b2953e0094134a887c76bd8",
                                "https://explorer.avail.so/#/explorer",
                                "https://avail.subscan.io",
                                "https://etherscan.io/token/0xeeb4d8400aeefafc1b2953e0094134a887c76bd8",
                                "https://ethplorer.io/address/0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8"
                            ],
                            "official_forum_url": [
                                "https://www.linkedin.com/company/availproject/"
                            ],
                            "chat_url": [
                                "https://discord.com/invite/y6fHnxZQX8",
                                "https://www.youtube.com/@Availproject"
                            ],
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {
                                "github": [
                                    "https://github.com/availproject"
                                ]
                            }
                        },
                        "tickers": [
                            {
                                "base": "AVAIL",
                                "target": "USDT",
                                "market": {
                                    "name": "Bybit",
                                    "identifier": "bybit_spot",
                                    "has_trading_incentive": false
                                },
                                "last": 0.15652,
                                "volume": 14305460.6,
                                "converted_last": {
                                    "btc": 2.42e-06,
                                    "eth": 4.891e-05,
                                    "usd": 0.156426
                                },
                                "converted_volume": {
                                    "btc": 35.293439,
                                    "eth": 714.552,
                                    "usd": 2285152
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.108418,
                                "timestamp": "2024-08-01T12:28:18+00:00",
                                "last_traded_at": "2024-08-01T12:28:18+00:00",
                                "last_fetch_at": "2024-08-01T12:28:18+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bybit.com/trade/spot/AVAIL/USDT",
                                "coin_id": "avail",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AVAIL",
                                "target": "USDT",
                                "market": {
                                    "name": "HTX",
                                    "identifier": "huobi",
                                    "has_trading_incentive": false
                                },
                                "last": 0.1567,
                                "volume": 189018497.844294,
                                "converted_last": {
                                    "btc": 2.42e-06,
                                    "eth": 4.897e-05,
                                    "usd": 0.156606
                                },
                                "converted_volume": {
                                    "btc": 465.616,
                                    "eth": 9427,
                                    "usd": 30147308
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.30007,
                                "timestamp": "2024-08-01T12:28:36+00:00",
                                "last_traded_at": "2024-08-01T12:28:36+00:00",
                                "last_fetch_at": "2024-08-01T12:28:36+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.huobi.com/en-us/exchange/avail_usdt",
                                "coin_id": "avail",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "AVAIL",
                                "target": "USDT",
                                "market": {
                                    "name": "KuCoin",
                                    "identifier": "kucoin",
                                    "has_trading_incentive": false
                                },
                                "last": 0.156785,
                                "volume": 4601841.0,
                                "converted_last": {
                                    "btc": 2.42e-06,
                                    "eth": 4.9e-05,
                                    "usd": 0.156691
                                },
                                "converted_volume": {
                                    "btc": 11.136659,
                                    "eth": 225.473,
                                    "usd": 721068
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.180713,
                                "timestamp": "2024-08-01T12:28:41+00:00",
                                "last_traded_at": "2024-08-01T12:28:41+00:00",
                                "last_fetch_at": "2024-08-01T12:28:41+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.kucoin.com/trade/AVAIL-USDT",
                                "coin_id": "avail",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Infrastructure",
                            "Ethereum Ecosystem",
                            "Data Availability",
                            "Modular Blockchain"
                        ]
                    },
                    {
                        "id": "neiro-on-eth",
                        "symbol": "neiro",
                        "name": "Neiro on ETH",
                        "current_price": 0.175953,
                        "market_cap": 173161767,
                        "fully_diluted_valuation": 173161767,
                        "price_change_percentage_24h": 36.10535,
                        "circulating_supply": 1000000000.0,
                        "total_supply": 1000000000.0,
                        "max_supply": 1000000000.0,
                        "circulating_supply_percentage": 100.0,
                        "price_change_percentage_7d": 0.0,
                        "current_sentiment_positive": 63.79,
                        "trade_pair": "NEIROETHUSDT",
                        "chain": "ethereum",
                        "chain_id": 1,
                        "contract": "0xee2a03aa6dacf51c18679c516ad5283d8e7c2637",
                        "description": "The sister of the OG $DOGE, Kabosu, here to make history on the Ethereum chain! \r\n\r\nNeiro is a decentralized meme token on the ETH blockchain.\r\n\r\nNeiro Token is a very fun meme token project , Zero tax, pure simplicity, growing stronger by the day.\r\nWe\u2019re here to add a splash of color to the blockchain scene and create memorable experiences for our community.\r\n\r\nLaunched stealth with presale, zero taxes, LP burnt and contract renounced - TAX: 0/0\r\nThis narrative has its roots in a fascinating story.",
                        "links": {
                            "homepage": [
                                "https://www.neirocoin.xyz/"
                            ],
                            "blockchain_site": [
                                "https://etherscan.io/address/0xee2a03aa6dacf51c18679c516ad5283d8e7c2637",
                                "https://etherscan.io/token/0xEE2a03Aa6Dacf51C18679C516ad5283d8E7C2637",
                                "https://ethplorer.io/address/0xEE2a03Aa6Dacf51C18679C516ad5283d8E7C2637"
                            ],
                            "twitter_screen_name": "neiro_ethereum",
                            "telegram_channel_identifier": "neiro_ethereum",
                            "subreddit_url": "https://www.reddit.com",
                            "repos_url": {}
                        },
                        "tickers": [
                            {
                                "base": "NEIROETH",
                                "target": "USDT",
                                "market": {
                                    "name": "MEXC",
                                    "identifier": "mxc",
                                    "has_trading_incentive": false
                                },
                                "last": 0.1775,
                                "volume": 16705193.18,
                                "converted_last": {
                                    "btc": 2.74e-06,
                                    "eth": 5.553e-05,
                                    "usd": 0.177398
                                },
                                "converted_volume": {
                                    "btc": 45.792307,
                                    "eth": 927.566,
                                    "usd": 2963467
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 0.451977,
                                "timestamp": "2024-08-01T12:26:27+00:00",
                                "last_traded_at": "2024-08-01T12:26:27+00:00",
                                "last_fetch_at": "2024-08-01T12:26:27+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.mexc.com/exchange/NEIROETH_USDT",
                                "coin_id": "neiro-on-eth",
                                "target_coin_id": "tether"
                            },
                            {
                                "base": "NEIRO",
                                "target": "USDT",
                                "market": {
                                    "name": "Bitget",
                                    "identifier": "bitget",
                                    "has_trading_incentive": false
                                },
                                "last": 0.1777,
                                "volume": 862445.3,
                                "converted_last": {
                                    "btc": 2.74e-06,
                                    "eth": 5.553e-05,
                                    "usd": 0.177594
                                },
                                "converted_volume": {
                                    "btc": 2.569378,
                                    "eth": 52.02,
                                    "usd": 166360
                                },
                                "trust_score": "green",
                                "bid_ask_spread_percentage": 3.153153,
                                "timestamp": "2024-08-01T12:28:26+00:00",
                                "last_traded_at": "2024-08-01T12:28:26+00:00",
                                "last_fetch_at": "2024-08-01T12:28:26+00:00",
                                "is_anomaly": false,
                                "is_stale": false,
                                "trade_url": "https://www.bitget.com/spot/NEIROUSDT",
                                "coin_id": "neiro-on-eth",
                                "target_coin_id": "tether"
                            }
                        ],
                        "categories": [
                            "Meme",
                            "Ethereum Ecosystem",
                            "Dog-Themed"
                        ]
                    }
                ],
                "klass": "CryptocurrencyList"
            }
        }
    ],
    "chat_id": "3d36412c-7088-402c-8dac-07eb410814ba",
    "agent_version": "v2",
    "agent_api_name": "ProAgent",
    "query_summary": "Trending coins vs BTC growth",
    "agent_credits": 30,
    "credits_available": 4720
}
```