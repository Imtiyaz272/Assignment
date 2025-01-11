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

### Task 2: API - `/stats`
- Endpoint: `/stats`
- Method: GET
- Query Params:
  ```json
  {
    "coin": "bitcoin" // Can be one of the following: bitcoin, matic-network, ethereum
  }

Sample Response:
json
Copy code
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
Task 3: API - /deviation
Endpoint: /deviation
Method: GET
Query Params:
json
Copy code
{
  "coin": "bitcoin" // Can be one of the following: bitcoin, matic-network, ethereum
}
Functionality:
Calculate the standard deviation of the price of the specified cryptocurrency for the last 100 records stored in the database.
Sample Response:
json
Copy code
{
  "deviation": 4082.48
}
Setup Instructions
