const { Record } = require('../models');

module.exports = {
  // getRecords
  getRecords: async (req, res) => {
    try {
      const records = await Record.find().populate('winningTeamId').populate('event');
      if (!records) {
        return res.status(200).json({ error: 'You have no records yet!' });
      }
      return res.json(records);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // ADD RECORDS IS NOT DONE
  addRecord: async (req, res) => {
    const { recordType } = req.body;
    try {
      const newRecord = await new Record({ recordType, users: req.users._id, teams: req.teams._id }).save();
      req.user.record.push(newRecord);
      await req.user.save();
      return res.status(200).json(newRecord);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteRecord: async (req, res) => {
    // console.log(req.params);
    const { recordId } = req.params;
    try {
      const recordToDelete = await Record.findById(recordId);
      if (!recordToDelete) {
        return res.status(401).json({ error: 'Theres is no record with that id' });
      }
      const deletedTodo = await Record.findByIdAndDelete(recordId);
      return res.json(deletedTodo);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
