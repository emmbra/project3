const router = require('express').Router();
const { getUserById, getAllUserEmails, getAllUserUsernames } = require('../../../controllers/userController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/user')
  .get(requireAuth, getUserById);

router.route('/user/emails')
  .get(requireAuth, getAllUserEmails);

router.route('/user/username')
  .get(requireAuth, getAllUserUsernames);

module.exports = router;
