const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'You must provide an event name.'],
  },
  distance: {
    type: Number,
  },
  startTime: {
    type: Date,
    default: Date.now(),
  },
  completedTime: {
    type: Date,
    default: Date.now(),
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ['active', 'complete'],
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team',
  }],
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'Log',
  }],
  records: [{
    type: Schema.Types.ObjectId,
    ref: 'Record',
  }],
});

module.exports = model('Event', EventSchema);
