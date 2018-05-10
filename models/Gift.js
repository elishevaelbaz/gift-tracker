// Gift model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the giftSchema with our schema class
var giftSchema = new Schema({
  // gift, a string, must be entered
  gift: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // // summary, a string, must be entered
  // summary: {
  //   type: String,
  //   required: true
  // },
  // // url, a string, must be entered
  // url: {
  //   type: String,
  //   required: true
  // },
  // // date is just a string
  // date: {
  //   type: Date,
  //   default: Date.now
  // },
  // saved: {
  //   type: Boolean,
  //   default: false
  // }
});

// Create the Gift model using the giftSchema
var Gift = mongoose.model("Gift", giftSchema);

// Export the Gift model
module.exports = Gift;
