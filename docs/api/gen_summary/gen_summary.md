
# Market Analyzer Generate Summary

## Endpoint

`/ws/generate_summary/{user_id}`

## Message

The MarketAnalyzer Agent can generate summary based on the latest data from `12`, `24` and `48` hours.
You need to pass the hours as `x_hours` in the message.

```json
{
    "x_hours": 12,
    "stream": true,
    "agent": "MarketAnalyzerAgent"
}
```