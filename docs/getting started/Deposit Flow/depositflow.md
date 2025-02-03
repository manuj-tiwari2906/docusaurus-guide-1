---
title: Payment Request
sidebar_position: 1
---

To initiate a payment, send a **POST** request to the following endpoint:

**Endpoint:**
:::info
**POST**  
`https://api-payments.unicaps.io/api/v2/create/payment`
:::

**Sample Request**

```jsx
{
  "customer_email": "test@gmail.com",
  "customer_id": "Tes0001#43",
  "customer_mobile": "+919876543210",
  "customer_name": "Test",
  "order_id": "Test01",
  "return_url": "https://google.com",
  "transaction_amount": "100",
  "payment_method": "UPI",
  "additional_prop_3": "<Your Hash Value>"
}
```

**Sample Response**

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

