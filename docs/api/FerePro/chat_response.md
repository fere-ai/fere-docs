---
sidebar_position: 8
---

# Interpreting chat response

The response is streamed. There are various components of the response that you should be aware of.

## The internal status

This is the status of what the agents are doing internally. This comes as a single line of string.
You may choose to show this to the end user, or choose to ignore it completely.

Examples of such response:

1. `Boss 🤖 to Team 👫👫: (Internal Convo)`
2. `Team 👫👫 to Boss 🤖: (Internal Convo)`
3. `Thinking of using social searched to get some data.`
4. `Yes, we're done. Preparing report.`


## Intermediate data

This is the data that the agents are processing internally. You may show this data
to the user to let them know what has been happening behind the scenes.

The intermediate data can be of one of the following python schemas

### SocialPost

```python
class SocialPost:
  type: Annotated[str, "The type of the social post. Ex: tweet, cast"]
  text: Annotated[str, "The text of the post"]
  published: Annotated[str, "The timestamp of the post"]
  interaction_count: Annotated[int, "The reaction count of the post"]
  url: Annotated[str, "The url of the post"]
  author: Annotated[str, "The author of the post"]

class SocialSearchResponse:
  query: Annotated[str, "The query used to search"]
  posts: Annotated[list[SocialPost] | None, "The list of posts returned"]
```

Example:

```json
{
    "query": "BTC",
    "posts": [
        {
            "type": "cast",
            "text": "The price of Bitcoin (BTC) has returned to the $67,500 price range after a massive fall in the digital currency market and significant withdrawals from exchanges. Data from Cointelegraph Martex Pro and TradingView show that Bitcoin's price action is stabilizing as markets await macroeconomic events in the US.",
            "published": "2024-06-13T08:58:33",
            "interaction_count": 103,
            "url": "https://www.warpcast.com/maryama/0x75cee96e",
            "author": "maryama"
        }
    ],
    "klass": "SocialSearchResponse"
}
```

### NewsResponse

```python
class NewsItem:
  title: Annotated[str, "Title of the News"]
  url: Annotated[str, "URL of the News"]
  text: Annotated[str, "Text of the News"]
  published: Annotated[str, "Published date of the News"]
  author: Annotated[str | None, "Author of the News"] = None

class NewsResponse:
  query: Annotated[str, "The query which was searched"]
  news_items: Annotated[list[NewsItem], "List of News Items"]
```

Example

```json
{
    "query": "ETH",
    "news_items": [
        {
            "title": "TON flips ETH in daily active addresses, but that\u2019s not the full picture",
            "url": "https://cointelegraph.com/news/telegram-ton-daily-active-addresses-surpass-ethereum-june",
            "text": "Telegram\u2019s TON blockchain beaten Ethereum in terms of daily active addresses in 10 of the last 11 days, data shows.",
            "published": "2024-06-13 14:08:28",
            "author": null
        }
    ],
    "klass": "NewsResponse"
}
```

### Cryptocurrency

```python
class Cryptocurrency:
  id: str
  symbol: str
  name: str
  image: str = None
  current_price: float = None
  market_cap: int = None
  market_cap_rank: int = None
  fully_diluted_valuation: int = None
  total_volume: int = None
  high_24h: float = None
  low_24h: float = None
  price_change_24h: float = None
  price_change_percentage_24h: float = None
  market_cap_change_24h: float = None
  market_cap_change_percentage_24h: float = None
  circulating_supply: float = None
  total_supply: float = None
  max_supply: float = None
  ath: float = None
  ath_change_percentage: float = None
  ath_date: str = None
  atl: float = None
  atl_change_percentage: float = None
  atl_date: str = None
  roi: ROI = None
  last_updated: str = None
  circulating_supply_percentage: float = None
  price_change_percentage_7d: float = None
  current_sentiment_positive: float = None
  trade_pair: str | None = None
  chain: str = None
  chain_id: Annotated[int, "Used by DeBridge for widget"] = None
  contract: str = None
  description: str = None
  sparkline_in_7d: SparklineIn7D | None = None
  price_change_percentage_1h_in_currency: float | None = None
  historical_data: dict = None
  cex: list[Exchange] # Figure out the Exchange schema and add that
  dex: list[Exchange]
```

Example:

```json
{
    "id": "based-brett",
    "symbol": "brett",
    "name": "Brett",
    "image": null,
    "current_price": 0.156466,
    "market_cap": 1534491198,
    "market_cap_rank": null,
    "fully_diluted_valuation": 1534491198,
    "total_volume": null,
    "high_24h": null,
    "low_24h": null,
    "price_change_24h": null,
    "price_change_percentage_24h": 9.75643,
    "market_cap_change_24h": null,
    "market_cap_change_percentage_24h": null,
    "circulating_supply": 9910204135.22974,
    "total_supply": 9910204135.22974,
    "max_supply": 9999998988.0,
    "ath": null,
    "ath_change_percentage": null,
    "ath_date": null,
    "atl": null,
    "atl_change_percentage": null,
    "atl_date": null,
    "roi": null,
    "last_updated": null,
    "circulating_supply_percentage": 100.0,
    "price_change_percentage_7d": -11.312,
    "current_sentiment_positive": 83.5,
    "trade_pair": "BRETTUSDT",
    "chain": "base",
    "contract": "0x532f27101965dd16442e59d40670faf5ebb142e4",
    "description": "BRETT the dancer, gamer, and cultural icon of BASE chain (some like to call me the PEPE of BASE).",
    "sparkline_in_7d": null,
    "price_change_percentage_1h_in_currency": null,
    "historical_data": null,
    "klass": "Cryptocurrency"
}
```

### CryptocurrencyList

```python
class CryptocurrencyList:
  currencies: list[Cryptocurrency]
```

Example:

```json
{
    "currencies": [
        {
            "id": "michicoin",
            "symbol": "$michi",
            "name": "michi",
            "image": null,
            "current_price": 0.168351,
            "market_cap": 93561949,
            "market_cap_rank": null,
            "fully_diluted_valuation": 93561949,
            "total_volume": null,
            "high_24h": null,
            "low_24h": null,
            "price_change_24h": null,
            "price_change_percentage_24h": 5.27816,
            "market_cap_change_24h": null,
            "market_cap_change_percentage_24h": null,
            "circulating_supply": 555770695.0,
            "total_supply": 555770695.0,
            "max_supply": 1000000000.0,
            "ath": null,
            "ath_change_percentage": null,
            "ath_date": null,
            "atl": null,
            "atl_change_percentage": null,
            "atl_date": null,
            "roi": null,
            "last_updated": null,
            "circulating_supply_percentage": 100.0,
            "price_change_percentage_7d": -18.87652,
            "current_sentiment_positive": 100.0,
            "trade_pair": "MICHIUSDT",
            "chain": "solana",
            "contract": "5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp",
            "description": "MichiCoin emerges as a novel meme-based token on the Solana blockchain, garnering attention for its affiliation with Michi, an internet-famous feline figure. This digital asset encapsulates the fervor of meme culture while harnessing the potential of blockchain technology.\r\n\r\nKey Attributes:\r\n\r\nMichi's Endorsement: Backed by the renown of Michi, recognized as one of the most memeable cats on the internet, MichiCoin inherits a substantial following from cat enthusiasts and meme aficionados alike.\r\nTokenomics: Employing a carefully structured supply mechanism and supported by a fervent community, MichiCoin demonstrates a strong potential for exponential growth within the cryptocurrency space.\r\nCommunity Engagement: The MichiCoin ecosystem fosters a vibrant community of participants, ranging from seasoned traders to newcomers, all drawn together by their shared appreciation for feline charm and meme culture.",
            "sparkline_in_7d": null,
            "price_change_percentage_1h_in_currency": null,
            "historical_data": {
                "price_change_percentage_30d": -65.95
            }
        },
    ],
    "klass": "CryptocurrencyList"
}
```

## Streaming response

This is the final streaming response that the agents are sending to you. This
data comes in the format

```json
{"chunk": "a set of strings"}
```

## Final response

This is the final response that the agents are sending to you.
The Python Schema for this is the following


```python
class ChatResponse(BaseModel):
  answer: str # The final answer
  chat_id: UUID # The chat id
  representation: list[dict[str, Any]] | None # The representation of the answer
  agent_api_name: str # The agent API name
  query_summary: str # The query summary
  agent_credits: float # The agent credits used
  credits_available: float # The credits available
```

Here's what these fields mean

1. `answer` - The final answer
2. `chat_id` - The chat id
3. `representation` - The representation of the answer. This contains the sources
that have been used to populate the answer. This is an object and contains
following fields.

```json
[
    {"type": "symbols", "value": [],
    {"type": "nfts", "value": [],
    {"type": "tweets", "value": [],
    {"type": "casts", "value": []),
    {"type": "news", "value":[],
    {"type": "coins_data", "value": [],
  ]
```

4. `agent_api_name` - The agent API name. This is same as the agent_api_name in request.
5. `query_summary` - The query summary. A 3 -5 word summary of the user's question
6. `agent_credits` - The agent credits used in this call.
7. `credits_available` - The credits available globally.
