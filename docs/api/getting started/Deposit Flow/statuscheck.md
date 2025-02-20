---
title: Status Check
sidebar_position: 2
---


To check the status of a payment transaction, you send a **POST** request to the following endpoint:

**Endpoint:**

:::info
**POST**  
`https://api-payments.unicaps.io/api/v2/fetch/transaction`
:::

This request is used to retrieve the status of a specific transaction after it has been initiated.

**Request Parameters**

You typically need to send the following information in the request body:

- **transaction_id**: Unique identifier for the transaction (received after the payment request is created).

**Sample Request**

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

**Sample Response**

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

**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `order_id`     | string | ✅ Yes   | Unique order identifier |
| `transaction_amount` | string | ✅ Yes   | Unique transaction ID |

> **Note:** Required parameters must be included in the request body.

**HEADERS**

Below are the required headers for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `x-merchant-id`     | string | ✅ Yes   | Merchant ID |
| `x-api-key` | string | ✅ Yes   | Unique API key |

**Response Statuses**

| Status Code | Description |
|------------|-------------|
| 🟢 **200 OK** | The request was successful, and the payment has been processed. |
| 🔴 **403 Forbidden** | The request is forbidden. You may need proper credentials or permissions. |
| 🟡 **400 Invalid Request** | The request could not be processed due to missing or incorrect parameters. |
| 🔴 **500 Server Error** | An internal server error occurred. Please try again later or contact support. |




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
