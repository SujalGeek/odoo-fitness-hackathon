const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addActivity = async (req, res) => {
  try {
    const activity = new Activity({ ...req.body, user: req.user.id });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
