const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

const CryptoJS = require("crypto-js");

let category = req.params.category;
let encryptedCategory = CryptoJS.AES.encrypt(category, 'secret key 123').toString();

// Use 'encryptedCategory' to query the database
app.get("search", function handler(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='" +
    req.params.category +
    "' ORDER BY PRICE";
  pool.query(query1, [], function(err, results) {
    // process results
  });
});
