const { Team } = require('../models');

module.exports = {
  getAllTeams: async (req, res) => {
    try {
      const team = await Team.find();
      if(!team) {
        return res.status(401).json({ error: 'No teams found' });
      }
      return res.status(200).json(teams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllPublicTeams: async (req, res) => {
    const { teamType } = req.params;
    //no if statement because the user have to select one option
    try {
      const publicTeams = await Team.find({ teamType }, 'public');
      if (!publicTeams) {
        return res.status(401).json({ error: 'No public teams found' });
      }
      return res.status(200).json(publicTeams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllPrivateTeams: async (req, res) => {
    const { teamType } = req.params;
    //no if statement because the user have to select one option
    try {
      const privateTeams = await Team.find({ teamType }, 'private');
      if (!privateTeams) {
        return res.status(401).json({ error: 'No private teams found' });
      }
      return res.status(200).json(privateTeams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  addTeams: async (req, res) => {
    const { name, mascotIMG, teamType, passcode } = req.body;
    // check if team mascotIMG or teamType would come from req.params
    if (!name) {
      return res.status(400).json({ error: 'You must provide a name '});
    }
    try {
      const newTeam = await new Team({ name, passcode, mascotIMG, teamType });
      newTeam.users.push(req.user._id).save();
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  addUserToTeam: async (req, res) => {
    const { teamId } = req.params;
    try {
      // update team by Id push req.user into team.users
      const teamToUpdate = await Team.findByIdAndUpdate(teamId, {$push: { users: req.user._id }}, { new:true });
      // return res.status(200).json(teamToUpdate);
      if (teamToUpdate.users.length === teamToUpdate.maxMembers) {
        const updatedTeam = await Team.findByIdAndUpdate(teamId, { teamStatus: 'ready'}, { new: true });
        return res.status(200).json(updatedTeam);
      }
      return res.status(200).json(teamToUpdate);
    } catch (e) {
      return res.status(403).json({ e });
    }
    // compare team.users.length to team.maxmembers
    // if those numbers are equal then update team and set team.teamStatus to ready
  },

  deleteUserFromTeam: async (req, res) => {
    const { teamId } = req.params;
    try {
      // update team by Id push req.user into team.users
      const teamToDeleteUser = await Team.findByIdAndUpdate(teamId, {$pull: { users: req.user._id }}, { new:true });
      // return res.status(200).json(teamToUpdate);
      if (teamToDeleteUser.users.length === teamToUpdate.maxMembers) {
        const updatedTeam = await Team.findByIdAndUpdate(teamId, { teamStatus: 'available'}, { new: true });
        return res.status(200).json(updatedTeam);
      }
      return res.status(200).json(teamToDeleteUser);
    } catch (e) {
      return res.status(403).json({ e });
    }
    // compare team.users.length to team.maxmembers
    // if those numbers are equal then update team and set team.teamStatus to ready
  },
 
}
