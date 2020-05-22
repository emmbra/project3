const router = require('express').Router();
const {
  getAllTeams,
  getTotalMileageByTeamId,
  getAllPrivateTeams,
  getAllPublicTeams,
  addTeams,
  addUserToTeam,
  deleteUserFromTeam,
} = require('../../../controllers/teamController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/team')
  .get(requireAuth, getAllTeams)
  .post(requireAuth, addTeams);

router.route('/team/:teamId')
  .get(requireAuth, getTotalMileageByTeamId)
  .post(requireAuth, addUserToTeam)
  .delete(requireAuth, deleteUserFromTeam);

router.route('/team/private')
  .get(requireAuth, getAllPrivateTeams);

router.route('/public') // missing /team?
  .get(requireAuth, getAllPublicTeams);

module.exports = router;
