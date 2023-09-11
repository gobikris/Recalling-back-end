const mongoose = require("mongoose");

const ticketSchema =  mongoose.Schema({
    issue: String,
    status: String,
  });

  module.exports = mongoose.model("Ticket", ticketSchema);