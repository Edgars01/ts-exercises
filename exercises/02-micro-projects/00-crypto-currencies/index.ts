import * as fs from "fs-extra";
import * as prompts from "prompts";
import fetch from "node-fetch";

const fetchExchangeRates = async (remote: boolean) => {
  if (remote) {
    return fetch(
      "https://api.coingecko.com/api/v3/exchange_rates"
    ).then((res) => res.json());
  }
  const fileContents = await fs.readFile("./exchange_rates.json", "utf8");
  return JSON.parse(fileContents);
};

const run = async () => {
  const { remote } = await prompts({
    type: "select",
    name: "remote",
    message: "Where to get exchage rates",
    choices: [
      { title: "Make a request to CoinGecko", value: true },
      { title: "Read file from the local file system", value: false },
    ],
    initial: 0,
  });

  const exchangeRates = await fetchExchangeRates(remote);
  console.log(exchangeRates);
};

run();
