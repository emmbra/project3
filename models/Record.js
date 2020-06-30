const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const RecordSchema = new Schema({
  recordType: {
    type: String,
    enum: ['win', 'loss'],
  },
  calculatedTime: {
    type: Number,
  },
  distanceCovered: {
    type: Number,
  },
  winningTeamId: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  losingTeamId: {
    type: String,
  },
  winningUserIds: {
    type: Array,
    default: [],
  },
  losingUserIds: {
    type: Array,
    default: [],
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team',
  }],
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'Log',
  }],
});

module.exports = model('Record', RecordSchema);
