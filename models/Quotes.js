const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const { Schema, model } = mongoose;

const QuoteSchema = new Schema({
  text: {
    type: String,
    unique: true,
  },
  author: {
    type: String,
  },
});

QuoteSchema.plugin(random);

module.exports = model('Quotes', QuoteSchema);
