## Prerequisites

In order to run this project copy the .env.sample file and place it into a .env file

## Getting Started

yarn start

## Improvements

- Don't return entities ids from db
- Init migration to load pools
- Add test suite

## Api example

```
curl --location --request GET 'localhost:3001/deposit-history?tag=LINK' \
--header 'Content-Type: application/json' \
--data-raw '{
    "asset_address": "asset_address",
    "amount": "amount",
    "origin_address": "origin_address",
    "tag": "tag"
}'
```

```
curl --location --request GET 'localhost:3001/pool' \
--data-raw ''
```

```
curl --location --request POST 'localhost:3001/deposit' \
--header 'Content-Type: application/json' \
--data-raw '{
    "assetAddress": "assetAddress",
    "amount": "amount",
    "originAddress": "origin_address",
    "tag": "tag"
}
'
```
