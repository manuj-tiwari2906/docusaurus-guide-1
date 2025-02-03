---
title: Balance Check API
sidebar_position: 3
---


The **Balance Check API** allows merchants to check the available balance in their account before initiating a payout. This helps ensure that there are sufficient funds to process the withdrawal.


**Endpoint:**

:::info
**POST**  
`https://api-payments.unicaps.io/api/v2/payout/balance`
:::

**Purpose:**

To retrieve the current balance available for payouts.

**How it works:**

   - **Request**: Send a POST request to the endpoint.
   - **Response**: The response will contain the available balance that can be used for payouts.

This API is useful for merchants to verify their available funds before initiating any payout requests.



**Sample Request**

<Tabs groupId="response-type">

  <TabItem value="body" label="BODY" default>

```json
{
  "wallet": "WALLET_BAL"
}
  ```
</TabItem> 
</Tabs>

**Sample Response**

<Tabs groupId="response-type">

  <TabItem value="success" label="Success" default>

```json
{
  "message": "Payout Balance fetched",
  "status": true,
  "data": {
    "merchant_id": "x-merchant-id",
    "available_balance": 133.48
  }
}

  ```
</TabItem> 
<TabItem value="bad_creds" label="Bad Creds">

```json
{
  "message": "Invalid credentials provided",
  "response_code": "BAD_CREDENTIAL",
  "status": false
}
```
</TabItem>
</Tabs>

**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `wallet`     | string | ✅ Yes   | Unique Wallet ID |

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




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
