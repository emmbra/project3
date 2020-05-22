const router = require('express').Router();
const {
  getAllTeams,
  addTeams,
  // getTotalMileageByTeamId,
  addUserToTeam,
  deleteUserFromTeam,
  getAllPrivateTeams,
  getAllPublicTeams,
} = require('../../../controllers/teamController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// api/team/
router.route('/')
  .get(requireAuth, getAllTeams)
  .post(requireAuth, addTeams);

// api/team/:teamId
router.route('/:teamId')
  // .get(requireAuth, getTotalMileageByTeamId)
  .post(requireAuth, addUserToTeam)
  .delete(requireAuth, deleteUserFromTeam);

// api/team/adduser
// router.route('/adduser')
//   .post(requireAuth, addUserToTeam);

// api/team/private
router.route('/private')
  .get(requireAuth, getAllPrivateTeams);

// api/team/public
router.route('/public')
  .get(requireAuth, getAllPublicTeams);

module.exports = router;
