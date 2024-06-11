// create an express server that listens for requests on port 3000 and responds with the stock price
//
const express = require("express");

const app = express();

const { getStockPrice, getStockPrices, storeStockPrice } = require("./stocks");

const testsecret =
  "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";

// get the stock price for a stock symbol
app.get("/stock/:stockSymbol", async (req, res) => {
  const stockSymbol = req.params.stockSymbol;
  const stockPrice = await getStockPrice(stockSymbol);
  res.json({ stockPrice });
});

// get the stock prices for an array of stock symbols
app.get("/stocks", async (req, res) => {
  const stockSymbols = req.query.stockSymbols.split(",");
  const stockPrices = await getStockPrices(stockSymbols);
  res.json({ stockPrices });
});

// store the stock price in the database
app.post("/stock/:stockSymbol", async (req, res) => {
  const stockSymbol = req.params.stockSymbol;
  const stockPrice = await getStockPrice(stockSymbol);
  await storeStockPrice(stockSymbol, stockPrice);
  res.json({ message: "Stock price stored in the database" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
