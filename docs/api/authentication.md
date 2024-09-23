---
sidebar_position: 3
---

# Authentication

You will need an API key to authenticate with our APIs.
While making the request to our APIs,
you will need to send the API key and the Origin header.


## Rest Endpoints

The Rest endpoints will need API key in header and the Origin as well.

```bash
curl -X GET "https://api.fereai.xyz/agents" -
-H "Origin: https://your-website.com" -
-H "X-FRIDAY-KEY: YOUR_API_KEY" -
-H "Content-Type: application/json"
```


## Websocket endpoints

The Websocket endpoints will need API key in the query parameter.

```javascript
const ws = new WebSocket("wss://api.fereai.xyz/ws/chat/v1/?X-FRIDAY-KEY=YOUR_API_KEY");
```

