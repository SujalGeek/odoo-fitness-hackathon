const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addWorkout = async (req, res) => {
  try {
    const workout = new Workout({ ...req.body, user: req.user.id });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
