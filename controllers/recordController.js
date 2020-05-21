const { Record } = require('../models');

module.exports = {
  // getRecordByUserID
  getRecords: async (req, res) => {
    try {
      // const records = await Record.find();
      const { userId } = req.params;
      // console.log(userId);
      const records = await Record.findById(userId).populate('Team').populate('Event');
      if (!records) {
        return res.status(200).json({ error: 'You have no records yet!' });
      }
      return res.json(records);
    } catch (error) {
      return res.status(403).json({ error });
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
