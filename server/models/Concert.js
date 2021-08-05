const { Schema, model } = require("mongoose");

const

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



module.exports = concertSchema;
