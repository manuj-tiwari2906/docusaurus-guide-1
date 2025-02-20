---
title: Request Flow
sidebar_position: 3

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Request Flow

### 1. Construct the JSON Request (Before Encryption )

```json
{
  "order_id": "ORDXXXXX",
  "transaction_amount": "XXX.XX",
  "customer_id": "CUSTXXXX",
  "customer_name": "John Doe",
  "customer_email": "john.doe@example.com",
  "customer_mobile": "XXXXXXXXXX",
  "payment_method": "PAYMENT_METHOD",  
  "return_url": "https://your-return-url.com"
}
  ```

### 2. Encrypt the JSON Payload

Once encrypted, the request format changes to:

```json
{
  "mid": "cd2a618b922f4e31b138207c627d48a3",
  "data": "<Encrypted_String>"
}
  ```

Encryption should be performed using **AES-256-CBC** before sending the request.

### 3. Send the Encrypted Request

Send the encrypted JSON payload via **POST** request to:

**Endpoint:**
:::info
**POST**  
`https://api.unicaps.io/h2h/transaction`
:::

### 4. Receive the Encrypted Response

Our server processes the request and returns an encrypted response:

```json
{
  "mid": "cd2a618b922f4e31b138207c627d48a3",
  "data": "<Encrypted_Response_String>"
}
  ```

### 5. Decrypt the Response

**IMPS Transaction Response**

This response represents a transaction made using IMPS (Immediate Payment Service), a real-time interbank electronic funds transfer system.

```json
{
  "message": "Transaction created",
  "status": "success",
  "statusCode": 200,
  "data": {
    "transactionId": "XXXXXXXXXXXX",
    "customerOrderId": "ORDXXXXX",
    "mode": "IMPS",
    "status": "PENDING",
    "merchantName": "Merchant Name",
    "accountHolderName": "Account Holder",
    "accountNumber": "XXXXXXXXXXXX",
    "bankName": "Bank Name",
    "ifsc": "IFSCXXXXXXX"
  }
}
  ```

  **UPI Transaction Response**

  This response represents a transaction made using UPI (Unified Payments Interface), a real-time payment system that allows instant bank-to-bank transactions.

  ```json
{
  "message": "Transaction created",
  "status": "success",
  "statusCode": 200,
  "data": {
    "transactionId": "XXXXXXXXXXXX",
    "customerOrderId": "ORDXXXXX",
    "mode": "UPI",
    "status": "PENDING",
    "merchantName": "Merchant Name",
    "accountHolderName": "Account Holder",
    "accountNumber": "XXXXXXXXXXXX",
    "bankName": "Bank Name",
    "ifsc": "IFSCXXXXXXX"
  }
}
  ```