---
title: Fetch Transaction Status

sidebar_position: 5

description: Fetch Transaction Status

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

### Request Before Encryption

<Tabs groupId="response-type">

  <TabItem value="orderId" label="Order ID" default>

```json
{
    "order_id":"33123" 
}
  ```
</TabItem> 
<TabItem value="transactionId" label="Transaction ID">

```json
{
    "transaction_id":"1312321" 
}
```
</TabItem>
</Tabs>

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
`https://api.unicaps.io/h2h/transaction/status`
:::


**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `order_id`     | string | ✅ Yes   | Unique order identifier |
| `transaction_amount` | string | ✅ Yes   | Unique transaction ID |

> **Note:** Required parameters must be included in the request body.

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
    "message": "Transaction created",
    "status": "success",
    "statusCode": 200,
    "data": {
        "transaction_id": "1312321",
        "order_id": "33123",
        "transaction_amount": 500,
        "merchant_name": "Test Merchant",
        "bank_rrn": null,
        "additional_prop_1": null,
        "additional_prop_2": null,
        "additional_prop_3": null,
        "payment_status": "Success",
        "created_at": "2023-12-15T02:10:40.08322",
        "created_at_asia": null
    }
}

  ```
</TabItem> 
<TabItem value="invalid" label="Invalid">

```json
{
    "message": "Invalid TransactionId",
    "status": "error",
    "statusCode": 400,
    "data": "Invalid TransactionId"
}
```
</TabItem>
<TabItem value="bad_creds" label="Bad Creds">

```json
{
    "message": "Invalid credentials provided",
    "status": "error",
    "statusCode": 400,
    "data": {}
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



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';