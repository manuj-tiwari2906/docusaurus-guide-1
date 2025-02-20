---
title: Check Merchant Payout Balance

sidebar_position: 5

description: Check Merchant Payout Balance

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Check Merchant Payout Balance

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/payout/balance`
:::


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `type`    | String | Must be "PAYOUT"          |


**Sample Response**

<Tabs groupId="response-type">
<TabItem value="success" label="Success" default>

```json
{
  "message": "Payout Balance fetched",
  "status": true,
  "data": {
    "available_balance": 2000.00
  }
}
  ```
</TabItem> 
</Tabs>
