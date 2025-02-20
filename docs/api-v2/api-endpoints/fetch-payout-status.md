---
title: Fetch Payout Status

sidebar_position: 4

description: Fetch Payout Status

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Fetch Payout Status

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/payout/status`
:::


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `payoutId`    | String | Unique Payout ID.          |


**Sample Response**

<Tabs groupId="response-type">
<TabItem value="success" label="Success" default>

```json
{
  "message": "Payout details fetched",
  "status": true,
  "data": {
    "payout_status": "Success"
  }
}
  ```
</TabItem> 
</Tabs>
