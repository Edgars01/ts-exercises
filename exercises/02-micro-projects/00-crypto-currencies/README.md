# Crypto Currencies

You must create a simple crypto currency converter.

For this exercise we will be using [CoinGecko API](https://www.coingecko.com/api/documentations/v3#/exchange_rates/get_exchange_rates) which returns BTC-to-Currency exchange rates. Since API has some request limit, stored response is present as well in [exchange_rates.json](./exchange_rates.json) and you can use it as fallback in case if something goes wrong.

Example user journey:

- select currency to convert from
- select amount
- select currency to convert to
- see the result
