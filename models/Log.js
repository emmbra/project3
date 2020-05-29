const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const LogSchema = new Schema({
  time: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
});

module.exports = model('Log', LogSchema);
