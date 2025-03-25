---
title: Check Merchant Payout Balance

sidebar_position: 5

description: Check Merchant Payout Balance

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---


### Request Before Encyption

```jsx
{
  "type": "PAYOUT"
}
```

### Encrypted JSON Payload

Once encrypted, the request format changes to:

```json
{
  "mid": "MERCHANT_UNIQUE_ID",
  "data": "<Encrypted_String>"
}
  ```

### Send the Encrypted Request

Send the encrypted JSON payload via POST request to:

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/api/v2/h2h/payout/balance`
:::

**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `type`     | String | ✅ Yes   | Must be "PAYOUT" |


### Received Encrypted Response

```json
{
  "mid": "MERCHANT_UNIQUE_ID",
  "data": "<Encrypted_Response_String>"
}
```

### Decrypted Response

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

### Response Statuses

| Status Code | Description |
|------------|-------------|
| 🟢 **200 OK** | The request was successful, and the payment has been processed. |
| 🔴 **403 Forbidden** | The request is forbidden. You may need proper credentials or permissions. |
| 🟡 **400 Invalid Request** | The request could not be processed due to missing or incorrect parameters. |
| 🔴 **500 Server Error** | An internal server error occurred. Please try again later or contact support. |
