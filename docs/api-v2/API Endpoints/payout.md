---
title: Create Payout (Withdraw Funds)
sidebar_position: 2

description: Create Payout (Withdraw Funds)
image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Create Payout (Withdraw Funds)

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/payout`
:::


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `mid`     | String | Unique Merchant ID assigned to you.                              |
| `data`    | String | Encrypted payout details.          |


**Sample Response**

<Tabs groupId="response-type">
<TabItem value="success" label="Success" default>

```json
{ 
    "message":"Payout Request Created",, 
    "status": true,
    "data": {
    "ref_id": "ORD766835",
    "payout_id": "U500582770347"
  }
}
```
</TabItem> 
</Tabs>
