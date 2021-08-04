const { Schema, model } = require("mongoose");

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
  
});

const Concert = model("Concert", concertSchema);

module.exports = Concert;
