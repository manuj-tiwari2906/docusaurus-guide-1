---
title: Create Withdrawal (Withdraw Funds)
sidebar_position: 2

description: Create Withdrawal (Withdraw Funds)
image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Create Withdrawal

### Request Before Encryption

<Tabs groupId="response-type">

  <TabItem value="request" label="Request" default>

```json
{
  "account_holder": "UserAccountHolderName",
  "account_number": "Account number",
  "customer_email": "test@gmail.com",
  "customer_id": "Tes0001#43",
  "customer_mobile": "+919876543210",
  "customer_name": "Test",
  "ifsc_code": "Valid Ifsc code",
  "order_id": "Test001",
  "payout_amount": "1000",
  "additional_prop_3": "<YourHash Request>"
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
`https://api.unicaps.io/h2h/payout`
:::


**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `order_id`     | string | ✅ Yes   | Unique order identifier |
| `payment_amount` | string | ✅ Yes   | Payment Amount |
| `account_number` | string | ✅ Yes   | Customer Account Number |
| `ifsc_code` | string | ✅ Yes   | Customer IFSC Code |
| `account_holder` | string | ✅ Yes   | Account Holder |
| `customer_id` | string | ✅ Yes   | Customer's ID |
| `customer_name` | string | ✅ Yes   | Customer Name |
| `customer_email` | string | ✅ Yes   | Customer Email |
| `customer_mobile` | string | ✅ Yes   | Customer Mobile Number |
| `additional_prop_1` | string | ❌ No   | Extra custom property 1 |
| `additional_prop_2` | string | ❌ No   | Extra custom property 2 |
| `additional_prop_3` | string | ❌ No   | Extra custom property 3 |

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
    "message": "Payout Request Created",
    "responseStatus":"SUCCESS",
    "data": {
        "payout_id": "543534",
        "ref_id": "321321"
    }
}
```
</TabItem> 
<TabItem value="unauthorized" label="Unauthorized">

```json
{
    "status": false,
    "response_code": "UnAuthorized",
    "message": "IP whitelisting is required for this IP address :00:00:00:00"
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