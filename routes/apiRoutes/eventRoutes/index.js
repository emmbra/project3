const router = require('express').Router();
const {
  getEvent,
  joinEvent,
  // addEvent,
  // editEvent,
  // deleteEvent,
} = require('../../../controllers/eventController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// api/event
router.route('/')
  .get(requireAuth, getEvent)
  .post(requireAuth, joinEvent);
  // .patch(requireAuth, editEvent)
  // .delete(requireAuth, deleteEvent);

module.exports = router;
