const { Schema } = require("mongoose");

const concertSchema = new Schema({
  concertId: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  venue: {
    type: String,
  },

  date: {
    type: String,
  },
});

module.exports = concertSchema;
