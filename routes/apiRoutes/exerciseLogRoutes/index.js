const router = require('express').Router();
const {
  addExerciseLog,
  getTotalUserDistance,
} = require('../../../controllers/logController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/exerciselog
router.route('/')
  .get(requireAuth, getTotalUserDistance)
  .post(requireAuth, addExerciseLog);

module.exports = router;
