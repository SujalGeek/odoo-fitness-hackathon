const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  level: { type: String, required: true },
  description: { type: String, required: true }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
