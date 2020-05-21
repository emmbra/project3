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
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team',
  }],
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
  }],
  records: [{
    type: Schema.Types.ObjectId,
    ref: 'Record',
  }],
});

module.exports = model('Log', LogSchema);
