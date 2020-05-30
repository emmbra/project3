const router = require('express').Router();
const {
  addExerciseLog,
  getTotalTeamDistance,
} = require('../../../controllers/logController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/exerciselog
router.route('/')
  .get(requireAuth, getTotalTeamDistance)
  .post(requireAuth, addExerciseLog);

module.exports = router;
