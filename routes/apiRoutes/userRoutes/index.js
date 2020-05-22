const router = require('express').Router();
const { getUserById, getAllUserEmails, getAllUserUsernames } = require('../../../controllers/userController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// api/user/
router.route('/')
  .get(requireAuth, getUserById);

// api/user/emails
router.route('/emails')
  .get(getAllUserEmails);

// api/user/username
router.route('/username')
  .get(getAllUserUsernames);

module.exports = router;
