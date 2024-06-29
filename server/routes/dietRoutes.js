const express = require('express');
const { getDiets, addDiet } = require('../controllers/dietController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getDiets);
router.post('/', authMiddleware, addDiet);

module.exports = router;
