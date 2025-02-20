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
  "order_id": "ORD1234519",
  "transaction_amount": "900.00",
  "customer_id": "CUST7892",
  "customer_name": "Alice Johnson",
  "customer_email": "alice.johnson@example.com",
  "customer_mobile": "9876543210",
  "payment_method": "IMPS",  
  "return_url": "https://example.com/return"
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

Once decrypted, the response contains transaction details:

```json
{
  "message": "Transaction created",
  "status": "success",
  "statusCode": 200,
  "data": {
    "transactionId": 3756100239537,
    "customerOrderId": "ORD1234519",
    "mode": "IMPS",
    "status": "PENDING",
    "merchantName": "Cricket Insomnia",
    "accountHolderName": "Akash Garments",
    "accountNumber": "409001974400",
    "bankName": "RBL BANK LIMITED",
    "ifsc": "RATN0000519"
  }
}
  ```