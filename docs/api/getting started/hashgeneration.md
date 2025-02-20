---
title: Hash Generation
sidebar_position: 8
---

For security purposes, a hash must be generated and passed as part of the request. The hash will be included in the ```additional_prop_3``` parameter.

#### For Payin (Payment Collection) ####

1. **With ```payment_method``` parameter**
Concatenate the following parameters in the specified order, without any spaces:
```orderid~amount~paymentMethod~x-api-key```
2. **Without ```payment_method``` parameter**
Concatenate the following parameters in the specified order, without any spaces:
```orderid~amount~x-api-key```

#### For Payout (Payment Disbursement) ####

Concatenate the following parameters in the specified order, without any spaces:
```Ref_id~amount~accountNumber~ifsccode~x-api-key```

#### Hash Generation ####

Once the parameters are concatenated, generate the hash using the **SHA-256** algorithm.
