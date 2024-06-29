const express = require('express');
const { getWorkouts, addWorkout } = require('../controllers/workoutController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getWorkouts);
router.post('/', authMiddleware, addWorkout);

module.exports = router;
