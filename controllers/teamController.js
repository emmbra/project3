const { Team } = require('../models');

module.exports = {
  getAllTeams: async (req, res) => {
    try {
      const team = await Team.find().populate('users');
      // console.log(team);
      if (!team) {
        return res.status(401).json({ error: 'No teams found' });
      }
      return res.status(200).json(team);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllPublicTeams: async (req, res) => {
    try {
      const publicTeams = await Team.find({ teamType: 'public' });
      if (!publicTeams) {
        return res.status(401).json({ error: 'No public teams found.' });
      }
      return res.status(200).json(publicTeams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllPrivateTeams: async (req, res) => {
    try {
      const privateTeams = await Team.find({ teamType: 'private' });
      if (!privateTeams) {
        return res.status(401).json({ error: 'No private teams found.' });
      }
      return res.status(200).json(privateTeams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  addTeams: async (req, res) => {
    // console.log(req.body);
    try {
      // console.log('im the body:', req.body);
      // console.log('im the user:', req.user);
      const { name, mascotIMG, teamType, passcode } = req.body;
      // check if team mascotIMG or teamType would come from req.params
      if (!name) {
        return res
          .status(400)
          .json({ error: 'You must provide a team name. ' });
      }
      const newTeam = await new Team({ name, passcode, mascotIMG, teamType });
      newTeam.users.push(req.user._id);
      newTeam.save();
      req.user.teams.push(newTeam._id);
      req.user.save();
      // console.log('after the save!', newTeam);
      return res.status(200).json(newTeam);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  // addUserToTeam: async (req, res) => {
  //   const { teamId } = req.params;
  //   const { passcode } = req.body;
  //   // check where is coming from the info from the drop down

  //   try {
  //     // find the team that they're trying to join
  //     const teamToJoin = await Team.findById(teamId);
  //     console.log(passcode);
  //     console.log(teamToJoin.passcode);
  //     if (teamToJoin.teamType === 'private') {
  //       if (teamToJoin.passcode === passcode) {
  //         if (teamToJoin.users.includes(req.user._id)) {
  //           return res.status(400).json({ error: 'Already on this team, cannot join again!' });
  //         }
  //         if (teamToJoin.users.length >= teamToJoin.maxMembers) {
  //           return res.status(400).json({ error: 'Team is full, please join another team!' });
  //         }
  //         teamToJoin.users.push(req.user._id);
  //         await teamToJoin.save();
  //         req.user.teams.push(teamToJoin._id);
  //         await req.user.save();
  //         if (teamToJoin.users.length === teamToJoin.maxMembers) {
  //           teamToJoin.teamStatus = 'ready';
  //           teamToJoin.save();
  //         }
  //         return res.status(200).json({ success: true });
  //       }
  //       return res.status(403).json({ error: 'Wrong passcode, please try again!' });
  //     }
  //     if (teamToJoin.users.includes(req.user._id)) {
  //       return res.status(400).json({ error: 'Already on this team, cannot join again!' });
  //     }
  //     if (teamToJoin.users.length >= teamToJoin.maxMembers) {
  //       console.log("this team is full");
  //       return res.status(400).json({ error: 'Team is full, please join another team!' });
  //     }
  //     teamToJoin.users.push(req.user._id);
  //     await teamToJoin.save();
  //     req.user.teams.push(teamToJoin._id);
  //     await req.user.save();
  //     if (teamToJoin.users.length === teamToJoin.maxMembers) {
  //       teamToJoin.teamStatus = 'ready';
  //       teamToJoin.save();
  //     }
  //     return res.status(200).json({ success: true });
  //   } catch (e) {
  //     return res.status(403).json(e);
  //   }

  //   //   // update team by Id push req.user into team.users

  //   //   const teamToUpdate = await Team.findByIdAndUpdate(
  //   //     teamId,
  //   //     { $push: { users: req.user._id } },
  //   //     { new: true },
  //   //   );
  //   //   // return res.status(200).json(teamToUpdate);
  //   //   if (teamToUpdate.users.length === teamToUpdate.maxMembers) {
  //   //     const updatedTeam = await Team.findByIdAndUpdate(
  //   //       teamId,
  //   //       { teamStatus: 'ready' },
  //   //       { new: true },
  //   //     );
  //   //     return res.status(200).json(updatedTeam);
  //   //   }
  //   //   return res.status(200).json(teamToUpdate);
  //   // } catch (e) {
  //   //   return res.status(403).json({ e });
  //   // }
  //   // compare team.users.length to team.maxmembers
  //   // if those numbers are equal then update team and set team.teamStatus to ready
  // },

  addUserToTeam: async (req, res) => {
    const { teamId } = req.params;
    const { passcode } = req.body;
    // check where is coming from the info from the drop down

    try {
      // find the team that they're trying to join
      const teamToJoin = await Team.findById(teamId);
      // console.log(passcode);
      // console.log(teamToJoin.passcode);
      // check passcode
      if (teamToJoin.teamType === 'private') {
        if (teamToJoin.passcode !== passcode) {
          return res.status(400).json({ error: 'Your passcode does not match' });
        }
      }
      // check if user is on team
      if (teamToJoin.users.includes(req.user._id)) {
        return res.status(400).json({ error: 'Already on this team, cannot join again!' });
      }
      // check if team is full
      if (teamToJoin.users.length >= teamToJoin.maxMembers) {
        // console.log("full");
        return res.status(400).json({ error: 'Team is full, please join another team!' });
      }

      teamToJoin.users.push(req.user._id);
      await teamToJoin.save();
      req.user.teams.push(teamToJoin._id);
      await req.user.save();

      if (teamToJoin.users.length === teamToJoin.maxMembers) {
        teamToJoin.teamStatus = 'ready';
        teamToJoin.save();
      }

      return res.status(200).json({ success: true });
    } catch (e) {
      // console.log(e);
      return res.status(403).json(e);
    }
  },

  deleteUserFromTeam: async (req, res) => {
    const { teamId } = req.params;
    try {
      // update team by Id push req.user into team.users
      const teamToDeleteUser = await Team.findByIdAndUpdate(
        teamId,
        { $pull: { users: req.user._id } },
        { new: true },
      );
      // return res.status(200).json(teamToUpdate);
      if (teamToDeleteUser.users.length === teamToDeleteUser.maxMembers) {
        const updatedTeam = await Team.findByIdAndUpdate(
          teamId,
          { teamStatus: 'available' },
          { new: true },
        );
        return res.status(200).json(updatedTeam);
      }
      return res.status(200).json(teamToDeleteUser);
    } catch (e) {
      return res.status(403).json({ e });
    }
    // compare team.users.length to team.maxmembers
    // if those numbers are equal then update team and set team.teamStatus to ready
  },
};
