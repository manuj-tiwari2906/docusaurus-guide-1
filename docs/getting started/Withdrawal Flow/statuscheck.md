---
title: Status Check
sidebar_position: 2
---


The **Payout Status Check** allows you to query the status of a previously initiated payout request. This helps you track whether the payout is successful, pending, or failed.

**Endpoint:**

:::info
**POST**  
`https://api-payments.unicaps.io/api/v2/fetch/payout`
:::

**Purpose:**

To retrieve the current status of a specific payout transaction.

**How it works:**
  - **Transaction ID**: Send the transaction ID (received when initiating the payout) to check the status.
  - **Response**: The response will indicate the current status of the payout **(e.g., Success, Pending, Failed).**

This API call is useful for merchants to monitor the progress of their payout requests in real time.


**Sample Request**

<Tabs groupId="response-type">

  <TabItem value="refId" label="REF ID" default>

```json
{
    "ref_id":"312321"
}
  ```
</TabItem> 
<TabItem value="payoutId" label="Payout ID">

```json
{
    "payout_id":"312321"
}
```
</TabItem>
</Tabs>

**Sample Response**

<Tabs groupId="response-type">

  <TabItem value="success" label="Success" default>

```json
{
    "status": true,
    "message": "Payout details fetched",
    "data": {
        "payout_id": "312321",
        "ref_id": "312321",
        "payout_amount": 500,
        "merchant_name": "Test Merchant",
        "account_holder_name": "Sample Account",
        "account_number": "4234324234",
        "ifsc_code": "SBIN2313",
        "payout_status": "Initializing",
        "bank_rrn": null,
        "payout_by": "MERCHANT_PUBLIC_API",
        "additional_prop_1": null,
        "additional_prop_2": null,
        "additional_prop_3": null,
        "created_at": "2023-12-11 11:21:22"
    }
}

  ```
</TabItem> 
<TabItem value="error" label="Error">

```json
{
    "status": false,
    "response_code": "error-code",
    "message": "error-message"
}
```
</TabItem>
</Tabs>

**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `ref_id`     | string | ❌ No   | Unique Reference identifier |
| `payout_id` | string | ❌ No   | Unique Payout ID |

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
