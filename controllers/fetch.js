// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeGifts: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(items) {
        // then insert items into the db
        return db.iftGift.create(items);
      })
      .then(function(dbGift) {
        if (dbGift.length === 0) {
          res.json({
            message: "No new items today. Check back tomorrow!"
          });
        }
        else {
          // Otherwise send back a count of how many new items we got
          res.json({
            message: "Added " + dbGift.length + " new items!"
          });
        }
      })
      .catch(function(err) {
        // This query won't insert items with duplicate gifts, but it will error after inserting the others
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
