const Diet = require('../models/Diet');

exports.getDiets = async (req, res) => {
  try {
    const diets = await Diet.find({ user: req.user.id });
    res.json(diets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addDiet = async (req, res) => {
  try {
    const diet = new Diet({ ...req.body, user: req.user.id });
    await diet.save();
    res.status(201).json(diet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
