---
title: Webhook
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A **webhook** is a way for the payment system to notify your application about events that occur during the payment process. For instance, when a transaction is completed, updated, or fails, the system can send a webhook to your specified endpoint with the relevant details.

The webhook allows you to receive **real-time updates** about transactions without having to constantly poll the server.

Once a transaction reaches a certain stage (e.g., success or failure), the system will automatically send a webhook notification to your predefined URL, containing the details of the transaction.

---


<Tabs groupId="response-type">

  <TabItem value="sampleJson" label="Sample JSON" default>

```json

{
  "webhook_response": {
    "event_type": "PAYOUT",
    "data": {
      "payout_id": "PAYOUT_ID",
      "ref_id": "REF_ID",
      "merchant_id": "MERCHANT_ID",
      "payout_amount": "PAYMENT_AMOUNT",
      "status": "STATUS",
      "bank_rrn": "BANK RRN",
      "bank_res_msg": "BANK RES MSG",
      "description": "STRING TYPE",
      "merchant_name": "STRING" 
    }
  }
}
  ```
</TabItem> 
</Tabs>

