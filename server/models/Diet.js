const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Diet = mongoose.model('Diet', DietSchema);

module.exports = Diet;
