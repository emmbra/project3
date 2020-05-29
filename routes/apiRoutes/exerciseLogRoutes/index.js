const router = require('express').Router();
const {
  addExerciseLog,
} = require('../../../controllers/logController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/exerciselog
router.route('/')
  .post(requireAuth, addExerciseLog);

module.exports = router;
