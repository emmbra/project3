const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'You must provide a team name.'],
  },
  mascotIMG: {
    type: String,
    required: [true, 'You must select a team mascot.'],
  },
  teamType: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  teamStatus: {
    type: String,
    enum: ['active', 'available', 'ready'],
    default: 'available',
  },
  passcode: {
    type: String,
  },
  maxMembers: {
    type: Number,
    default: 5,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
  }],
  records: [{
    type: Schema.Types.ObjectId,
    ref: 'Record',
  }],
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'Log',
  }],
});

module.exports = model('Team', TeamSchema);
