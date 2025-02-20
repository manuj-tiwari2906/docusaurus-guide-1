---
title: Authentication
sidebar_position: 3

image: ../static/img/docusaurus-social-card.jpg
keywords: [keywords, describing, the main topics]
---

# Authentication

Every request to our H2H API requires authentication via **Merchant ID (MID)** and **encrypted data payload.**


### Parameters

| Parameter | Type   | Description                                                      |
|-----------|--------|------------------------------------------------------------------|
| `mid`     | String | Unique Merchant ID assigned to you.                              |
| `data`    | String | Encrypted JSON payload containing the request details.          |
