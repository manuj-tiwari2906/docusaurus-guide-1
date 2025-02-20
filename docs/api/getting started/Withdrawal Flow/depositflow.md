---
title: Withdrawal Request
sidebar_position: 1
---

### Payout Flow

The **Payout Flow** allows merchants to initiate a withdrawal request, enabling the transfer of funds to the customer. This flow is useful when a merchant wants to pay out funds to a customer or partner.

**Withdrawal Request**

To initiate a payout, send a **POST** request to the following endpoint:

**Endpoint:**
:::info
**POST**  
`https://api-payments.unicaps.io/api/v2/create/payout`
:::

**Sample Request**

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

**Sample Response**

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

