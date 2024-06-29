const express = require('express');
const { getActivities, addActivity } = require('../controllers/activityController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getActivities);
router.post('/', authMiddleware, addActivity);

module.exports = router;
