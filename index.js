const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config),
      rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use("/search", limiter);

app.get("search", function handler(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT ITEM,FROM TABLE WHERE ITEM_CATEGORY='" + req.params.category + "'";
  pool.query(query1, [], function(err, results) {
    // process results
  });
});
