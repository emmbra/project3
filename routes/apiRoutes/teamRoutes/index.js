const router = require('express').Router();
const {
  getAllTeams,
  addTeams,
  getTotalMileageByTeamId,
  addUserToTeam,
  deleteUserFromTeam,
  getAllPrivateTeams,
  getAllPublicTeams,
} = require('../../../controllers/teamController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/team')
  .get(requireAuth, getAllTeams)
  .post(requireAuth, addTeams);

router.route('/team/:id')
  .get(requireAuth, getTotalMileageByTeamId)
  .post(requireAuth, addUserToTeam)
  .delete(requireAuth, deleteUserFromTeam);

router.route('/team/private')
  .get(requireAuth, getAllPrivateTeams);

router.route('/public')
  .get(requireAuth, getAllPublicTeams);

module.exports = router;
