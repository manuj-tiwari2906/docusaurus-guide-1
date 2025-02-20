---
title: Fetch Transaction Status

sidebar_position: 3

description: Fetch Transaction Status

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Fetch Transaction Status

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/transaction/status`
:::


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `transactionId`     | String | Unique Merchant ID assigned to you.                              |
| `orderId`    | String | Merchant's Order ID.          |


**Sample Response**

<Tabs groupId="response-type">
<TabItem value="success" label="Success" default>

```json
{
  "message": "Transaction Found",
  "status": "success",
  "data": {
    "transaction_id": "1555651429213",
    "payment_status": "Initializing"
  }
}
  ```
</TabItem> 
</Tabs>
