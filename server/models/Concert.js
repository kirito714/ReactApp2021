const { Schema } = require("mongoose");

const concertSchema = new Schema({
  concertId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
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
