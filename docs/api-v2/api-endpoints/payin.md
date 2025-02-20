---
title: Create Transaction (Pay-in)
sidebar_position: 1

description: Create Transaction (Pay-in)
image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Create Transaction

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/transaction`
:::


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `mid`     | String | Unique Merchant ID assigned to you.                              |
| `data`    | String | Encrypted transaction details.          |


**Sample Response**

<Tabs groupId="response-type">
<TabItem value="success" label="Success" default>

```json
{ 
    "message": "Transaction created", 
    "status": "success", "data": { ... } 
}
  ```
</TabItem> 
<TabItem value="failed" label="Failed">

```json
{ 
    "message": "Error processing request", 
    "status": "failed" 
}
```
</TabItem>
</Tabs>
