---
title: Encryption And Security

sidebar_position: 5

description: Encryption And Security

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Encryption And Security

All transactions are secured using **AES-256 encryption**. Ensure you:

- Encrypt request payloads before sending.
- Decrypt responses using the **provided decryption key.**


### Encryption Algorithm

| Encryption Algorithm | Key Length  |  Mode                                                      |
|----------------------|-------------|------------------------------------------------------------------|
| AES-256    | String | CBC          |


Merchants must generate and store their encryption keys securely.
