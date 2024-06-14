// create an express server that listens for requests on port 3000 and responds with the stock price
//
const express = require("express");

const app = express();

const { getStockPrice, getStockPrices, storeStockPrice } = require("./stocks");

const testsecret =
  "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";

// get the stock price for a stock symbol
app.get("/stock/:stockSymbol", async (req, res) => {
  try {
    const stockSymbol = req.params.stockSymbol;
    const stockPrice = await getStockPrice(stockSymbol);
    res.json({ stockPrice });
  } catch (error) {
    console.error(`Error fetching stock price for symbol ${req.params.stockSymbol}: ${error}`);
    res.status(500).json({ error: "Error fetching stock price" });
  }
});

// get the stock prices for an array of stock symbols
app.get("/stocks", async (req, res) => {
  try {
    const stockSymbols = req.query.stockSymbols.split(",");
    const stockPrices = await getStockPrices(stockSymbols);
    res.json({ stockPrices });
  } catch (error) {
    console.error(`Error fetching stock prices: ${error}`);
    res.status(500).json({ error: "Error fetching stock prices" });
  }
});

// store the stock price in the database
app.post("/stock/:stockSymbol", async (req, res) => {
  try {
    const stockSymbol = req.params.stockSymbol;
    const stockPrice = await getStockPrice(stockSymbol);
    await storeStockPrice(stockSymbol, stockPrice);
    res.json({ message: "Stock price stored in the database" });
  } catch (error) {
    console.error(`Error storing stock price for symbol ${req.params.stockSymbol}: ${error}`);
    res.status(500).json({ error: "Error storing stock price" });
  }
});

// get the stock price history for a stock symbol
app.get("/stock/history/:stockSymbol", async (req, res) => {
  try {
    // Placeholder for getStockPriceHistory implementation
    // This should fetch the stock price history for the given symbol
    // For now, we'll just return a placeholder response
    res.json({ message: "Stock price history feature is not implemented yet" });
  } catch (error) {
    console.error(`Error fetching stock price history for symbol ${req.params.stockSymbol}: ${error}`);
    res.status(500).json({ error: "Error fetching stock price history" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
