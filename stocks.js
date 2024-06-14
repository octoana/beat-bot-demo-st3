// create methods to get a stock's price using a stock symbol
// use the alphavantage API to get the stock price
// use the axios library to make the API call
// also use the pg library to connect to the database
// create a method that stores the stock price in the database
// create a method that retrieves the stock price from the database

// 

const axios = require("axios");

// getStockPrice method

const getStockPrice = async (stockSymbol) => {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey
    =${process.env.ALPHA_VANTAGE_API_KEY}`;
  try {
    const response = await axios.get(url);
    const stockPrice = response.data["Global Quote"]["05. price"];
    return stockPrice;
  } catch (error) {
    console.error(`Error fetching stock price: ${error}`);
  }
};

// get the stock price for an array of stock symbols
// use the Promise.all method to make multiple API calls at the same time
const getStockPrices = async (stockSymbols) => {
  const promises = stockSymbols.map((stockSymbol) =>
    getStockPrice(stockSymbol)
  );
  const stockPrices = await Promise.all(promises);
  return stockPrices;
};

// create a method that stores the stock price in the database in the stocks table
const storeStockPrice = async (stockSymbol, stockPrice) => {
  const query = {
    text: "INSERT INTO stocks (stock_symbol, stock_price) VALUES ($1, $2)",
    values: [stockSymbol, stockPrice],
  };
  try {
    await pool.query(query);
    console.log("Stock price stored in the database");
  } catch (error) {
    console.error(`Error storing stock price: ${error}`);
  }
};

// create a method to get the stock price history
const getStockPriceHistory = async (stockSymbol) => {
  // Placeholder for getStockPriceHistory implementation
  // This should fetch the stock price history for the given symbol
  // For now, we'll just return a placeholder response
  return "Stock price history feature is not implemented yet";
};

module.exports = { getStockPrice, getStockPrices, storeStockPrice, getStockPriceHistory };
