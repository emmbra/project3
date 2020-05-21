const router = require('express').Router();
const {
  getRecords,
  addRecord,
  deleteRecord,
} = require('../../../controllers/recordController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.route('/record')
  .get(requireAuth, getRecords)
  .post(requireAuth, addRecord)
  .delete(requireAuth, deleteRecord);


module.exports = router;
