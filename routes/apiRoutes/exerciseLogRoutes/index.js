const router = require('express').Router();
const {
  getRecords,
  addRecord,
  deleteRecord,
} = require('../../../controllers/recordsController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/records')
  .get(requireAuth, getRecords)
  .post(requireAuth, addRecord);
  .delete(requireAuth, deleteRecord);

module.exports = router;
