const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.get("search", function handler(req, res) {

 var adminCred = "Admin123!"

      if ( req.params.secret == adminCred)
      {
      
                       
        // BAD: the category might have SQL special characters in it
        var query1 =
          "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='" +
          req.params.category +
          "' ORDER BY PRICE";
        pool.query(query1, [], function(err, results) {
          // process results
        });
      }
});
