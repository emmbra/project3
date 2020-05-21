const router = require('express').Router();
const {
  getExerciseLog,
} = require('../../../controllers/exerciseLogController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/exerciselog')
  .post(requireAuth, addExerciseLog);

module.exports = router;
