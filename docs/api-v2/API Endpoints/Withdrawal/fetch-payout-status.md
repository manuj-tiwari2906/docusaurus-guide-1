---
title: Fetch Withdrawal Status
sidebar_position: 4
---

### Request Before Encryption

<Tabs groupId="response-type">
<TabItem value="payoutId" label="Request">

```json
{
    "payout_id":"312321"
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
`https://api.unicaps.io/api/v2/h2h/payout/status`
:::

**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `payout_id` | string | ❌ No   | Unique Payout ID |

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


### Response Statuses

| Status Code | Description |
|------------|-------------|
| 🟢 **200 OK** | The request was successful, and the payment has been processed. |
| 🔴 **403 Forbidden** | The request is forbidden. You may need proper credentials or permissions. |
| 🟡 **400 Invalid Request** | The request could not be processed due to missing or incorrect parameters. |
| 🔴 **500 Server Error** | An internal server error occurred. Please try again later or contact support. |



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';