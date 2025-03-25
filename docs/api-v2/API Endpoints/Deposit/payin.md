---
title: Create Transaction (Pay-in)
sidebar_position: 1
---

### Request Before Encryption

<Tabs>
  <TabItem value="requests" label="Request" default>

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
`https://api.unicaps.io/api/v2/h2h/transaction`
:::


**Body Parameters**

Below are the required and optional parameters for the API request.

| Parameter       | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `order_id`     | string | ✅ Yes   | Unique order identifier |
| `transaction_amount` | string | ✅ Yes   | Transaction Amount |
| `customer_id` | string | ✅ Yes   | Customer ID |
| `customer_name` | string | ✅ Yes   | Full name of the customer |
| `customer_email` | string | ✅ Yes   | Customer's email address |
| `customer_mobile` | string | ✅ Yes   | Customer's mobile number |
| `payment_method` | string | ❌ No   | Selected payment method |
| `additional_prop_1` | string | ❌ No   | Extra custom property 1 |
| `additional_prop_2` | string | ❌ No   | Extra custom property 2 |
| `additional_prop_3` | string | ❌ No   | Extra custom property 3 |
| `return_url` | string | ✅ Yes    | Return URL |

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

  <TabItem value="success" label="SUCCESS" default>

```json
{
    "transaction_id": "312312",
    "checkout_url": "https://checkout.unicaps.io/xyz",
    "message": "Transaction created",
    "status": true,
    "responseStatus": "SUCCESS"
}
```
</TabItem> 
<TabItem value="limit-error" label="LIMIT ERROR">

```json
{
    "message": "amount limit exceeds",
    "status": "error",
    "statusCode": 400,
    "data": {}
}
```
</TabItem>
<TabItem value="bad-creds" label="BAD CREDS">

```json
{
    "message": "Bad Credentials",
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