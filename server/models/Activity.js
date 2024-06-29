const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  activity: { type: String, required: true },
  duration: { type: String, required: true }
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
