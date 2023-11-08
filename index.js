const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.get("search", function handler(req, res) {

      if(req.params.credentiall != "AdminPassword123!!!iuniversse") return res.send(403, "not an admin");
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='" +
    req.params.category +
    "' ORDER BY PRICE";
  pool.query(query1, [], function(err, results) {
    // process results
  });
});
