# Crypto Stats API

This project is a backend implementation for fetching and analyzing cryptocurrency data.

## Features

- Background job to fetch cryptocurrency stats from CoinGecko every 2 hours.
- REST API endpoints to:
  - Retrieve the latest cryptocurrency stats.
  - Calculate the standard deviation of cryptocurrency prices from stored data.

---

## Tasks

### Task 1: Background Job
- Implement a background job that fetches the current price (in USD), market cap (in USD), and 24-hour change for the following cryptocurrencies:
  - Bitcoin
  - Matic
  - Ethereum
- These details are fetched using the CoinGecko API. Relevant IDs:
  - Bitcoin: `bitcoin`
  - Matic: `matic-network`
  - Ethereum: `ethereum`
- The job runs every 2 hours and stores the data in a database.
  
  ![image](https://github.com/user-attachments/assets/9120adbf-a355-483a-b04b-5139e786b2ec)
  ![image](https://github.com/user-attachments/assets/12f5ac92-4f3f-4611-a92a-a859a1caae1f)

### Task 2: API - `/stats`
- Endpoint: `/stats`
- Method: GET

  ![image](https://github.com/user-attachments/assets/9e93a0a8-015e-4864-ba74-bcbc78eeb43a)

### Task 2: API - `/deviation`
- Endpoint: `/deviation`
- Method: GET

  ![image](https://github.com/user-attachments/assets/7e732055-3966-4286-9ba5-a011202f6213)


