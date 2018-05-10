// Controller for our gifts
// ============================
var db = require("../models");

module.exports = {
  // Find all gifts, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Gift
      .find(req.query)
      // .sort({ date: -1 })
      .then(function(dbGift) {
        res.json(dbGift);
      });
  },
  // Delete the specified gift
  delete: function(req, res) {
    db.Gift.remove({ _id: req.params.id }).then(function(dbGift) {
      res.json(dbGift);
    });
  },
  // Update the specified gift
  update: function(req, res) {
    db.Gift.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbGift) {
      res.json(dbGift);
    });
  }
};
